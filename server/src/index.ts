import 'dotenv/config';
import express from "express";
import cors from "cors";
import pool from "./db/index.js";
import authRoutes from "./routes/auth.js";

// to test my protected route
import protectedRoutes from "./routes/protected.js";
import goalsRoutes from "./routes/goals.js";

console.log("🚀 Starting server...");
console.log("📦 Environment:", {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 5000,
  DB_HOST: process.env.DB_HOST
});

const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
}));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/goals", goalsRoutes);
app.use("/protected", protectedRoutes);

console.log("✅ Middleware configured");

app.get("/", (req, res) => {
  console.log("📍 GET / - Root endpoint hit");
  res.send("The Goal Conquest API is running ⚔️");
});

app.get("/test-db", async (req, res) => {
  console.log("📍 GET /test-db - Testing database connection...");
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Database query successful:", result.rows[0]);
    res.json({ success: true, time: result.rows[0] });
  } catch (err) {
    console.error("❌ Database error:", err);
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

const PORT = Number(process.env.PORT) || 5050;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n⚔️  Server running on http://localhost:${PORT}`);
  console.log(`🔗 http://localhost:${PORT}/test-db\n`);
});