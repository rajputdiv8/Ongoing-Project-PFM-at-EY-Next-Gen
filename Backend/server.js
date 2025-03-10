// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/expenses', require('./routes/expenseRoutes'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const expenseRoutes = require("./routes/expenseRoutes");
// app.use("/api/expenses", expenseRoutes);


// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Import Routes
// const expenseRoutes = require("./routes/expenseRoutes");
// app.use("/api/expenses", expenseRoutes);

// // MongoDB Connection
// const mongoURI = process.env.MONGO_URI;

// if (!mongoURI) {
//     console.error("❌ MongoDB URI is not defined. Set MONGO_URI in .env file.");
//     process.exit(1); // Stop the server if MONGO_URI is missing
// }

// mongoose
//     .connect(mongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("✅ MongoDB Connected Successfully"))
//     .catch((err) => {
//         console.error("❌ MongoDB Connection Error:", err);
//         process.exit(1); // Exit on database connection failure
//     });

// // API Test Route
// app.get("/", (req, res) => {
//     res.json({ message: "🚀 API is running..." });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const expenseRoutes = require("./routes/expenseRoutes");
app.use("/api/expenses", expenseRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
