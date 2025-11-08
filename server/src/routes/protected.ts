import express from "express";
import { authenticationToken, AuthRequest } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/me", authenticationToken, (req: AuthRequest, res) => {
    res.json({success: true, user: req.user});
});

export default router;