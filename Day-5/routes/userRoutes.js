const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    res.json({
        message: "User created successfully",
        data: req.body
    });
});

router.get("/", (req, res) => {
    res.json({
        message: "All users list"
    });
});

router.get("/:id", (req, res) => {
    res.json({
        message: "Single user by ID", 
        id: req.params.id
    });
});

router.put("/:id", (req, res) => {
    res.json({
        message: "User updated succesfully", 
        id: req.params.id,
    });
});

router.delete("/:id", (req, res) => {
    res.json({
        message: "User deleted succesfully", 
        id: req.params.id
    });
});

module.exports = router;