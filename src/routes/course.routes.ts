const express = require('express');
const router = express.Router();

const courseController = require('../controllers/course.controller');

    router.get('/courses',
        courseController.getCourses
    )

    router.post('/courses',
        courseController.newCourse
    )
    router.put('/courses/:id',
        courseController.updateCourse
    )
    router.get('/courses/:id',
        courseController.getCourse
    )
    router.delete('/courses/:id',
        courseController.deleteCourse
    )

    export default router;