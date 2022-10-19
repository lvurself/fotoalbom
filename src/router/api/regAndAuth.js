import { hash } from 'bcrypt';
import express from 'express';
import {User} from '../../db/models/';

const router = express.Router();
router.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.json({ status: 400, message: 'name or email or password not valid' });
  const hashpassword=await hash(password, 10);
  try{
    const newUser = await User.
  }
});

export default router;
