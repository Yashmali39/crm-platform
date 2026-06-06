const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req, res)=>{
    res.send("CRM API is running");
});



app.use("/api/leads", leadRoutes);






const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
})