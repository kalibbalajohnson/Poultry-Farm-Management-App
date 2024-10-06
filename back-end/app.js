const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path");
const logger = require("./logger");

const port = process.env.PORT || 3000;
const poultryRoutes = require("./routes/poultryRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.static(path.join(__dirname, "frontend")));

// log all requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use("/api", poultryRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "index.html"));
// });

app.use((err, req, res) => {
  logger.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => logger.info(`Listening on port ${port}`));
