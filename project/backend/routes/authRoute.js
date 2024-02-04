import express from 'express'
import User from '../models/model.js'
 
const router = express.Router()


router.post('/submit',async (req,res)=>
{try{
    const {name , phone_no, address, email,password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    const newUser = new User({ name,phone_no,address, email, password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error'}) }


}) 


export default router 