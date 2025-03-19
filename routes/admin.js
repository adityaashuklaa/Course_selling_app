const { Router } = require('express')
const adminMidddleware = require('../middleware/admin')
const router = Router()
const { Admin } = require('../db')
const { Course } = require('../db')

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

router.post('/courses', adminMidddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;   
    // You can use zod library here to check the inputs, as user can send any input he wants.
    const newCourse = await Course.create({
        title: title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course Created Successfully', courseId : newCourse._id
    })
})

router.get('/courses', adminMidddleware, async (req, res) => {
    // Implement Fetching all courses logic
    // Course.find({}) // Promise Syntax
    //     .then(function(response) {
    //         res.json({
    //             courses: response
    //         })
    //     })
    const response = await Course.find({})
    res.json({
        courses: response
    })
})

module.exports = router

