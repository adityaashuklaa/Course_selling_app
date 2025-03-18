const { Router } =  require('express')
const router = Router()
const userMiddelware = require('../middleware/user')

// User Routes 
router.post('/signup', (req, res) => {
    // Implement User Signup Logic
})

router.get('/courses', (req, res) => {
    // Implement listening all courses Logic
})

router.post('/courses/:courseId', userMiddelware, (req, res) => {
    // Implement Course Purchase Logic
})

router.get('/purchasedCourses', userMiddelware, (req, res) => {
    // Implement fetching purchased courses Logic
})

module.exports = router
