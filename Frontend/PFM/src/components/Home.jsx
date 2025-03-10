// import React from "react";
// import "../styles/styles.css";

// const Home = () => {
//     return (
//         <div className="home">
//             <h2>Welcome to My App</h2>
//             <p>This is a simple React app using CSS for styling.</p>
//         </div>
//     );
// };

// export default Home;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/styles.css";

// const Home = () => {
//     const [expenses, setExpenses] = useState([]);
//     const [form, setForm] = useState({ name: "", amount: "" });

//     // Fetch expenses from the backend
//     useEffect(() => {
//         axios.get("http://localhost:5000/api/expenses")
//             .then(response => setExpenses(response.data))
//             .catch(error => console.error("Error fetching expenses:", error));
//     }, []);

//     // Handle form input change
//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/api/expenses", form);
//             setExpenses([...expenses, response.data]); // Update UI with new expense
//             setForm({ name: "", amount: "" }); // Reset form
//         } catch (error) {
//             console.error("Error adding expense:", error);
//         }
//     };

//     return (
//         <div className="home">
//             <h2>Expense Manager</h2>
//             <p>Track and manage your expenses easily.</p>

//             {/* Expense Form */}
//             <form onSubmit={handleSubmit} className="expense-form">
//                 <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="Expense Name"
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="amount"
//                     value={form.amount}
//                     onChange={handleChange}
//                     placeholder="Amount"
//                     required
//                 />
//                 <button type="submit">Add Expense</button>
//             </form>

//             {/* Expense List */}
//             <div className="expense-list">
//                 <h3>Expenses</h3>
//                 <ul>
//                     {expenses.length === 0 ? (
//                         <p>No expenses recorded yet.</p>
//                     ) : (
//                         expenses.map((expense) => (
//                             <li key={expense._id}>
//                                 {expense.name} - ${expense.amount}
//                             </li>
//                         ))
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Home;
import React, { useState, useEffect } from "react";

const Home = () => {
    const [expenseName, setExpenseName] = useState("");
    const [amount, setAmount] = useState("");
    const [expenses, setExpenses] = useState([]);

    // Fetch Expenses from Backend
    useEffect(() => {
        fetch("http://localhost:5000/api/expenses")
            .then((res) => res.json())
            .then((data) => setExpenses(data))
            .catch((err) => console.error("Error fetching expenses:", err));
    }, []);

    // Add Expense
    const handleAddExpense = async () => {
        if (!expenseName || !amount) {
            alert("Please enter both Expense Name and Amount.");
            return;
        }

        const newExpense = { name: expenseName, amount: parseFloat(amount) };

        try {
            const response = await fetch("http://localhost:5000/api/expenses/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newExpense),
            });

            const data = await response.json();
            setExpenses([...expenses, data]);

            // Reset form
            setExpenseName("");
            setAmount("");
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1 style={{ background: "blue", color: "white", padding: "10px" }}>My App</h1>
            <h2>Expense Manager</h2>
            <p>Track and manage your expenses easily.</p>

            {/* Expense Input Fields */}
            <input
                type="text"
                placeholder="Expense Name"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                style={{ padding: "8px", margin: "5px", width: "80%" }}
            />
            <br />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ padding: "8px", margin: "5px", width: "80%" }}
            />
            <br />
            
            {/* Add Expense Button */}
            <button onClick={handleAddExpense} style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}>
                Add Expense
            </button>

            {/* Display Expenses */}
            <h3>Expenses</h3>
            {expenses.length === 0 ? (
                <p>No expenses recorded yet.</p>
            ) : (
                <ul>
                    {expenses.map((expense, index) => (
                        <li key={index}>
                            {expense.name}: ${expense.amount}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
