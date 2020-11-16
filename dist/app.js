"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const special_routes_1 = __importDefault(require("./routes/special.routes"));
const course_routes_1 = __importDefault(require("./routes/course.routes"));
const testimonial_routes_1 = __importDefault(require("./routes/testimonial.routes"));
//init
const app = express_1.default();
//settigns
app.set('port', process.env.PORT || 4000);
//middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
//routes
app.get('/', (req, res) => {
    res.send(`api in the http//localhost:${app.get('port')}`);
});
app.use(auth_routes_1.default);
app.use(special_routes_1.default);
app.use(course_routes_1.default);
app.use(testimonial_routes_1.default);
exports.default = app;
