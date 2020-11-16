const Course = require('../models/course');
import { Request, Response, NextFunction } from "express";


//funtion para obtner cursos
export const getCourses =  async (req: Request,res:Response,next :NextFunction) => {
    try {
        const courses = await Course.find({})
        res.json(courses)
    } catch (error) {
        console.log(error)
        next();
        
    }
  
} 

// funcion para crear nuevo curso
export const newCourse = async (req: Request,res:Response,next :NextFunction) => {

    const course = new Course(req.body);
    try {
        await course.save();
        res.json({message: 'Curso insertado'})
    } catch (error) {
        console.log(error)
        next();
    }
} 

export const updateCourse = async (req: Request,res:Response,next :NextFunction) =>{
    try {
        const course = await Course.findByIdAndUpdate({_id : req.params.id}, req.body , {
            next: true
        })
        res.json(course);
        
    } catch (error) {
        console.log(error)
        next()
    }
}

export const getCourse = async (req: Request,res:Response,next :NextFunction)=> {
    try {
        const course = await Course.findById(req.params.id)
        res.json(course)
    } catch (error) {
        console.log(error)
        next();
    }
}

export const deleteCourse = async(req: Request,res:Response,next :NextFunction) => {

    try {
        await Course.findByIdAndDelete( {_id:req.params.id })
        res.json({message : 'Curso eliminado correctamente'});
    } catch (error) {
        console.log(error)
        next();
    }
}