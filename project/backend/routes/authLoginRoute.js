import express from 'express';
import bcrypt from 'bcrypt';
import userSchema from '../models/model.js'
 

const router = express.Router();

// Placeholder database for storing user data
const usersDB = [];

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database based on the email
    const user = await userSchema.findOne({ email: email });
    

    console.log('Entered email:',user.email)

    if (!user) {
      
      return res.status(401).json({ success: false, message: 'User not found' });
    }
    

    // Verify the password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log('Stored hashed password:', user.password);
      console.log('Entered pass:',password);
      return res.status(401).json({ success: false, message: 'Incorrect password' });
    }

    res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
})

export default router;