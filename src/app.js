const express = require("express");
const cors = require("cors");

const jijiRoutes = require("./routes/jiji.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Learn with Jiji backend is running 🚀" });
});

app.use("/api", jijiRoutes);

module.exports = app;
