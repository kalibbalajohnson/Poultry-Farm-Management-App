const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 3000;
const poultryRoutes = require("./routes/poultryRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get("/", (req, res) => {
  res.send("Poultry Farm Management API");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.use("/api", poultryRoutes);

app.listen(port, () => console.log('Listening on port ${port}'));