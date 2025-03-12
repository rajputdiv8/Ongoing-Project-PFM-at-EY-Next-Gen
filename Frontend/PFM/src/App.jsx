// import React from "react";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Footer from "./components/Footer";
// import "./styles/styles.css";

// const App = () => {
//     return (
//         <div className="container">
//             <Header />
//             <Home />
//             <Footer />
//         </div>
//     );
// };

// export default App;


// import React, { useState } from "react";
// import "./styles/styles.css";

// const App = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");

//   const addExpense = () => {
//     if (name && amount) {
//       setExpenses([...expenses, { name, amount }]);
//       setName("");
//       setAmount("");
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Personal Finance Manager</h1>

//       <div className="expense-form">
//         <input
//           type="text"
//           placeholder="Expense Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <button className="add-btn" onClick={addExpense}>Add Expense</button>
//       </div>

//       <h2 className="expense-header">Expenses</h2>
//       <ul className="expense-list">
//         {expenses.map((expense, index) => (
//           <li key={index} className="expense-item">
//             {expense.name}: ₹{expense.amount}
//           </li>
//         ))}
//       </ul>

//       <footer className="footer">
//         © 2025 <b>Personal Finance Manager</b> developed by <b>Divyanshu Raj</b>.
//       </footer>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import "./styles/styles.css"; // Ensure the correct path

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (expenseName.trim() && amount.trim()) {
      setExpenses([...expenses, { name: expenseName, amount: Number(amount) }]);
      setExpenseName(""); // Clear input fields
      setAmount("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Personal Finance Manager</h1>
      <div className="expense-form">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="add-btn" onClick={addExpense}>
          Add Expense
        </button>
      </div>

      <h2 className="expenses-title">Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            {expense.name}: ${expense.amount}
          </li>
        ))}
      </ul>

      <footer className="footer">
        © 2025 Personal Finance Manager | Developed by Anand Kumar
      </footer>
    </div>
  );
};

export default App;
