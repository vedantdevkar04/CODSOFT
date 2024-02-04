import express from 'express'
 
import connectDb from './config/db.js'
import dotenv from 'dotenv';
import cors from 'cors';

import signupRouter from './routes/authRoute.js';
import loginRouter  from './routes/authLoginRoute.js';
import paymentRouter from './routes/authPaymentRoute.js';

dotenv.config();

const app = express()

connectDb();
app.use(cors());
app.use(express.json());

app.post('/submit', signupRouter);
app.post('/login',loginRouter);
app.post('/',paymentRouter);



const PORT = process.env.PORT || 8080;


app.get("/",(req,res)=>{

    res.send("Welcome to home page")

})




app.listen(PORT, ()=> {
    console.log(`SERVER IS RUNNING ON PORT ${PORT} on ${process.env.DEV} mode `)
});

