// const mongoose = require('mongoose');

// const ExpenseSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     title: String,
//     amount: Number,
//     category: String,
//     date: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Expense', ExpenseSchema);

// const mongoose = require("mongoose");

// const ExpenseSchema = new mongoose.Schema({
//     name: String,
//     amount: Number,
//     category: String,
//     date: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Expense", ExpenseSchema);
const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Expense", ExpenseSchema);
