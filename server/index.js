const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const port = 3000;
connectDB();

// routes
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running to port: `, port);
});
