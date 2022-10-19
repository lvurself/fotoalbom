import { compare, hash } from 'bcrypt';
import express from 'express';
import { User } from '../../db/models';

const router = express.Router();
router.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.json({ status: 400, message: 'name or email or password not valid' });
  const hashpassword = await hash(password, 10);
  try {
    const newUser = await User.create({ name, email, password: hashpassword });
    req.session.user = { id: newUser.id, name: newUser.name, email: newUser.email };
    res.json({ id: newUser.id, name: newUser.name, email: newUser.email });
  } catch (err) {
    console.error(err);
  }
});


router.post('/auth', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'email or password not valid' });
//   try {
//     const userFromDb = await User.findOne({ where: email });
//     if (!userFromDb) return res.status(400).json({ message: 'email not found' });
//     const isValid = await compare(password, userFromDb.password);

  //     if (!isValid) return res.status(400).json({ message: 'email or password is invalid' });

  //     req.session.user = { id: userFromDb.id, name: userFromDb.name, email: userFromDb.email };
  //     res.json({ id: userFromDb.id, name: userFromDb.name, email: userFromDb.email });
  //   } catch (err) { console.error(err); }

  const { email, password } = req.body;
  if (email && password) {
    const user = await User.findOne({ where: { email } });
    if (user && await compare(password, user.password)) {
      const currUser = { id: user.id, name: user.name };
      req.session.user = currUser;
      return res.json(currUser);
    }
    return res.sendStatus(401);
  }
  return res.sendStatus(401);
});

router.get('/logout', async (req, res) => {
  res.clearCookie('user_sid');
  req.session.destroy();
  res.sendStatus(200);
});


export default router;
