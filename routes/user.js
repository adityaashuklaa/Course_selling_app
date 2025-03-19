const { Router } =  require('express')
const router = Router()
const userMiddelware = require('../middleware/user')
const { User, Course } = require('../db')
const { default: mongoose } = require('mongoose')

// User Routes 
router.post('/signup', (req, res) => {
    // Implement User Signup Logic
    const username = req.body.username
    const password = req.body.password
    User.create({
        username, 
        password
    })
    res.json({
        msg: 'User created successfully'
    })
})

router.get('/courses', async (req, res) => { // There is no middleware as it is open to the world.
    // Implement listening all courses Logic
        const response = await Course.find({})

        res.json({
            courses : response 
        })

})

router.post('/courses/:courseId', userMiddelware, async (req, res) => {
    // Implement Course Purchase Logic
    const courseId = req.params.courseId // Whatever is there in the route get's dynamically here
    const username = req.headers.username
    await User.updateOne({
        username: username
    }, {
        "$push" : {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: 'Purchase Complete !'
    })
})  

router.get('/purchasedCourses', userMiddelware, async (req, res) => {
    // Implement fetching purchased courses Logic
    const user = await User.findOne({
        username: req.headers.username 
    })

    const courses = await Course.find({
        _id: {
            '$in': user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
})


module.exports = router
