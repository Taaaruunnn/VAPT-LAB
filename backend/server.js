const express = require("express");
const session = require("express-session");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");
const uploadRoutes = require("./routes/upload.routes");
const commentRoutes = require("./routes/comment.routes");
const app = express();

// Parse JSON FIRST
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true
  })
);
// Then sessions
app.use(
  session({
    secret: "12345",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    },
  })
);

// Then routes
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile",profileRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("VAPT LAB Backend Running");
});
connectDB();
app.listen(5000, () => {
  console.log("Server running on port 5000");
});