// Import necessary modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const logger = require("./logger");
const promClient = require('prom-client');

// Set the port for the application
const port = process.env.PORT || 3000;
const poultryRoutes = require("./routes/poultryRoutes"); // Import routes for the poultry management API
// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const register = new promClient.Registry(); 
promClient.collectDefaultMetrics({ register });  
// Histogram to measure HTTP request duration
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 1, 1.5, 2, 5]
});

register.registerMetric(httpRequestDuration); // Register the metrics

// Middleware to time HTTP requests and log duration metrics
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.route?.path || req.url, status_code: res.statusCode });
  });
  next();
});

app.get('/metrics', async (req, res) => {
  logger.info('Metrics endpoint was hit'); 
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.use(express.static(path.join(__dirname, "frontend")));

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
// Use poultry management API routes under "/api"
app.use("/api", poultryRoutes);
// Catch-all route to serve the frontend's index.html for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});
// Start the server and listen on the specified port
app.listen(port, () => logger.info(`Listening on port ${port}`));
