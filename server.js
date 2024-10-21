import express from 'express'
import dotenv from 'dotenv'
import connectDB from './configuration/db.js';
import cors from 'cors'
import morgan from 'morgan';

dotenv.config();

connectDB();


const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
import authRoute from './routes/authRoute.js'

//routes
app.use('/api/v1/auth',authRoute)


const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server running on  port${PORT}`)
})

