import {NextFunction, Request, Response} from 'express'
const Testimonial = require('../models/testimonial');


export const getTestimonial = async(req: Request,res: Response,next: NextFunction) => {

    try {
        const testimoniales = await Testimonial.find({});
        res.json(testimoniales)
    } catch (error) {
        console.log(error)
        next();
        
    }


}

export const postTestimonial = async(req: Request,res: Response,next: NextFunction) => {

    const testimonial = new Testimonial(req.body)
    try {
        await testimonial.save();
        res.json({message : 'Testimonial insertado '});
        

    } catch (error) {
        console.log(error)
        next();
        
    }
}