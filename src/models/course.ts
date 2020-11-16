import mongoose = require('mongoose');
import Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String ,
        trim: true,
        required: true
    },
    image: {
        type : String,
        trim: true
    },
    description: {
        type: String ,
        trim: true,
        required: true
    },
    shedule: {
        type: String ,
        trim: true,
        required: true
    },
    teacher: {
        type: String ,
        trim: true,
        required: true
    },
    price: {
        type: Number ,
        trim: true,
        required: true
    },
    
})

module.exports = mongoose.model('Course', CourseSchema);