import express from "express";
import pool from "../db/index.js";
import { authenticationToken, AuthRequest } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticationToken, async (req: AuthRequest, res) => {
    try {
        const result = await pool.query("SELECT * FROM goals WHERE user_id = $1", [req.user!.id]);
        res.json({success: true, goals: result.rows});
    } catch(err) {
        res.status(500).json({success: false, error: (err as Error).message});
    }
});

// This will create a new goal and be authenticated
router.post("/", authenticationToken, async (req: AuthRequest, res) => {
    const {title, description, difficulty} = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO goals (user_id, title, description, difficulty) VALUES ($1, $2, $3, $4) RETURNING *",
            [req.user!.id, title, description, difficulty || 1]
        );
        res.json({success: true, goal: result.rows[0]});
    } catch(err) {
        res.status(500).json({success: false, error: (err as Error).message});
    }
});

export default router;