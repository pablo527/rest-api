import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport'
import passportMiddleware from './middlewares/passport';

import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';
import courseRoutes from './routes/course.routes'
import testimonialRoutes from './routes/testimonial.routes'

//init

const app = express();

//settigns

app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(passport.initialize());
passport.use(passportMiddleware);


//routes

app.get('/',(req,res) => {
    res.send(`api in the http//localhost:${app.get('port')}`);
})

app.use(authRoutes);
app.use(specialRoutes);
app.use(courseRoutes);
app.use(testimonialRoutes);

export default app;