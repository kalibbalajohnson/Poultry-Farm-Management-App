const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const logger = require("./logger");
const promClient = require('prom-client');

const port = process.env.PORT || 3000;
const poultryRoutes = require("./routes/poultryRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Prometheus: Set up the default metrics collection
const register = new promClient.Registry();  // Create a new registry
promClient.collectDefaultMetrics({ register });  // Collect default metrics

// Optional: Add custom metrics (e.g., track HTTP request durations)
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 1, 1.5, 2, 5]
});

// Add custom metrics to the registry
register.registerMetric(httpRequestDuration);

// Middleware to track HTTP request durations
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.route?.path || req.url, status_code: res.statusCode });
  });
  next();
});

// Prometheus: Expose the /metrics endpoint before any catch-all route
app.get('/metrics', async (req, res) => {
  logger.info('Metrics endpoint was hit'); // Log for debugging
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Set up the static file serving for your frontend
app.use(express.static(path.join(__dirname, "frontend")));

// Log all requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Define the API routes
app.use("/api", poultryRoutes);

// Serve the frontend for any other routes, but make sure it's below the API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Start the server
app.listen(port, () => logger.info(`Listening on port ${port}`));
