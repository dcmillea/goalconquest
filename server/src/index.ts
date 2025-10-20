import express from "express";
import cors from "cors";
import pool from "./db/index.js"; // <-- import the pool

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The Goal Conquest API is running ⚔️");
});

// TEST DATABASE CONNECTION
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()"); // simple query
    res.json({ success: true, time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
