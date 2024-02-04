import express from 'express';
import Payor from '../models/paymentModel.js';


const router= express.Router()


router.post('/',async (req,res)=>
{try {
    const {name,phone ,address,cardNumber ,expiryMonth ,expiryYear ,cvv } = req.body;

   
    const payor = new Payor({ name,phone,address,cardNumber,expiryMonth,expiryYear, cvv });

    // Save the user to the database
    await payor.save();

    res.status(201).json({ message: 'Payor registered successfully.' });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error'}) }


}) 


export default router 