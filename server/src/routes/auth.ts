import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db/index.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Register the User
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    console.log("Received register request:", req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
      [username, email, hashedPassword]
    );
    console.log("User inserted:", newUser.rows[0]);
    res.json({ success: true, user: newUser.rows[0] });
  } catch (err) {
    console.error("❌ Error registering user:", err);
    res.status(500).json({ success: false, error: (err as Error).message });
  }
});

// Errors: 401 --> Bad User Credentials
// Errors: 500 --> Server Error

// Login the User
router.post("/login", async (req, res) => {
    const {email, password} = req.body || {};

    if(!email || !password) {
      return res.status(400).json({success: false, message: "Missing email or password"});
    }

    try {
      console.log("Login request: ", req.body);

        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if(result.rows.length === 0) {
            return res.status(401).json({success: false, message: "User not found"});
        }

        const user = result.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            return res.status(401).json({success: false, message: "Invalid password"});
        }

        const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET || "your_secret_key", { expiresIn: "2h"});

        console.log("Login success, token issed for user: ", user.email);
        res.json({success: true, token});

    } catch(err) {
        console.error("❌ Error logging in user:", (err as Error).message);
        res.status(500).json({success: false, error: (err as Error).message});
    }
});

export default router;