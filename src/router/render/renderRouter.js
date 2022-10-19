import express from 'express';
import Album from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});
router.get('/reg', (req, res) => {
  res.render('Layout');
});
router.get('/auth', (req, res) => {
  res.render('Layout');
});

router.get('/home', (req, res) => {
  res.render('Layout');
});

router.get('/albumList', async (req, res) => {
  const albums = await Album.findAll();
  const initState = { albums };
  res.render('Layout', initState);
});

export default router;
