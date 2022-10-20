import express from 'express';
import { Album, Photo } from '../../db/models';

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

router.get('/home', async (req, res) => {
  const albums = await Album.findAll();
  const initState = { albums };
  res.render('Layout', initState);
});
router.get('/home/album/:albumId', async (req, res) => {
  const { albumId } = req.params;
  const oneAlbumPhoto = await Photo.findAll({ where: { albumid: albumId } });
  const initState = { oneAlbumPhoto };
  res.render('Layout', initState);
});

router.get('/home/newalbum', (req, res) => {
  res.render('Layout');
});

export default router;
