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
exports.deleteCourse = exports.getCourse = exports.updateCourse = exports.newCourse = exports.getCourses = void 0;
const Course = require('../models/course');
//funtion para obtner cursos
exports.getCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield Course.find({});
        res.json(courses);
    }
    catch (error) {
        console.log(error);
        next();
    }
});
// funcion para crear nuevo curso
exports.newCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const course = new Course(req.body);
    try {
        yield course.save();
        res.json({ message: 'Curso insertado' });
    }
    catch (error) {
        console.log(error);
        next();
    }
});
exports.updateCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield Course.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            next: true
        });
        res.json(course);
    }
    catch (error) {
        console.log(error);
        next();
    }
});
exports.getCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield Course.findById(req.params.id);
        res.json(course);
    }
    catch (error) {
        console.log(error);
        next();
    }
});
exports.deleteCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Course.findByIdAndDelete({ _id: req.params.id });
        res.json({ message: 'Curso eliminado correctamente' });
    }
    catch (error) {
        console.log(error);
        next();
    }
});
