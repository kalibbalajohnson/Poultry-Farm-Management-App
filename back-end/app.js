const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const logger = require("./logger");
const promClient = require("prom-client");
const {connectToMongoDB} = require("./config/mongoConfig");

const port = process.env.PORT || 3001;
const poultryRoutes = require("./routes/poultryRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

const httpRequestDuration = new promClient.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.1, 0.3, 0.5, 1, 1.5, 2, 5],
});

register.registerMetric(httpRequestDuration);

app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on("finish", () => {
    end({
      method: req.method,
      route: req.route?.path || req.url,
      status_code: res.statusCode,
    });
  });
  next();
});

app.get("/metrics", async (req, res) => {
  logger.info("Metrics endpoint was hit");
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.use("/api", poultryRoutes);

app.use(express.static(path.join(__dirname, "frontend")));

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.get("*", (req, res) => {
  if (!req.originalUrl.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
  } else {
    res.status(404).send("API route not found");
  }
});

// connect to MongoDB and start the server
connectToMongoDB().then(() => {
  app.listen(port, () => logger.info(`Listening on port ${port}`));
}).catch(error => {
  console.error("Failed to start server due to MongoDB connection error:", error);
});


