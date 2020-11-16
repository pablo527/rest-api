const express = require('express');
const router = express.Router();

const testimonialController = require('../controllers/testimonial.controller');

    router.get('/testimoniales',
    testimonialController.getTestimonial
)

router.post('/testimoniales', 
    testimonialController.postTestimonial
)

export default router;
