const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

// Midlewares for parsing request bodies 
app.use(bodyParser.json())
app.use('/admin', adminRouter) // Handles all the function and logic inside the admin routes
app.use('/user', userRouter) //  Handles all the function and logic inside the user routes

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})