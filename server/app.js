const express = require('express');
const app = express()
const PORT = 5000;
const connectDB = require('./config/db');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB();
require('./models/User')
require('./models/Post')
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


app.listen(PORT, () => {
    console.log("App started on http://localhost:" + PORT);
})
