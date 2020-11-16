import  mongoose = require('mongoose');
import Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
    name: {
        type: String ,
        trim: true
    },
    email: {
        type: String ,
        trim: true,
        required: true
    },
    text: {
        type: String ,
        trim: true,
        required: true
    },
    
    
})

module.exports = mongoose.model('Testimonial', TestimonialSchema);