import express from 'express';

const router = express.Router();

router.get("/test-db", (req, res) => {
    res.json({ message: "User route is  working" });
});

export default router;