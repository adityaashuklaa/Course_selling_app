const { Router } = require('express')
const adminMidddleware = require('../middleware/admin')
const router = Router()
const { Admin } = require('../db')

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username: username, // Both syntax having same execution
        password
    })

    res.json({
        msg: "Admin Created Successfully."
    })
})

router.post('/courses', adminMidddleware, (req, res) => {
    // Implement course creation logic
})

router.get('/courses', adminMidddleware, (req, res) => {
    // Implement Fetching all courses logic
})

module.exports = router

