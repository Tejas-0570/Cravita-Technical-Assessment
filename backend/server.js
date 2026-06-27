const express = require('express');
const dotenv = require('dotenv')
const app = express();
const route = require('react-router');
const { default: mongoose } = require('mongoose');
const taskRoute = require('./routes/taskRoute')

app.use(express.json);
app.use('/api/', taskRoute)
// const PORT = process.env.PORT;
app.listen(3000, ()=>(
    console.log(`Server is running`)
));

mongoose.connect(process.env.DB_URL).then(()=> console.log("MongoDB Connected")).catch(err => console.log("MongoDB Error", err))