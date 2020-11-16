"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonial.controller');
router.get('/testimoniales', testimonialController.getTestimonial);
router.post('/testimoniales', testimonialController.postTestimonial);
exports.default = router;
