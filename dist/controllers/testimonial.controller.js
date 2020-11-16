"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTestimonial = exports.getTestimonial = void 0;
const Testimonial = require('../models/testimonial');
exports.getTestimonial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testimoniales = yield Testimonial.find({});
        res.json(testimoniales);
    }
    catch (error) {
        console.log(error);
        next();
    }
});
exports.postTestimonial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = new Testimonial(req.body);
    try {
        yield testimonial.save();
        res.json({ message: 'Testimonial insertado ' });
    }
    catch (error) {
        console.log(error);
        next();
    }
});
