const express = require('express');
const app = express();

const authRoutes = require('./Routes/AuthRoutes');

app.use('/auth', authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});