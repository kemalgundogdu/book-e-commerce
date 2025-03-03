const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

// connect to database
connectDB();

// routes
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

// testing
// app.use((req, res, next) => {
//   console.log('Headers:', req.headers);
//   console.log('Cookie Header:', req.headers.cookie);
//   next();
// });

// routes
app.get("/", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});
app.use("/book", bookRoutes);
app.use("/user", userRoutes);



app.listen(port, () => {
  console.log(`Server is running to port: `, port);
});
