// const express = require('express');
// const Expense = require('../models/Expense');

// const router = express.Router();

// // Add Expense
// router.post('/add', async (req, res) => {
//     try {
//         const expense = await Expense.create(req.body);
//         res.json(expense);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Get Expenses
// router.get('/:userId', async (req, res) => {
//     try {
//         const expenses = await Expense.find({ userId: req.params.userId });
//         res.json(expenses);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Expense = require("../models/Expense");

// router.get("/", async (req, res) => {
//     const expenses = await Expense.find();
//     res.json(expenses);
// });

// router.post("/", async (req, res) => {
//     const newExpense = new Expense(req.body);
//     await newExpense.save();
//     res.json(newExpense);
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// Add Expense
router.post("/add", async (req, res) => {
    try {
        const { name, amount } = req.body;
        if (!name || !amount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newExpense = new Expense({ name, amount });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
