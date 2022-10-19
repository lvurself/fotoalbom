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
  // const photos = await Photo.findAll({ where: { albumid: albums.id } });
  const initState = { albums };
  res.render('Layout', initState);
});
router.get('/home/album/:albumId', async (req, res) => {
  const { albumId } = req.params;
  // console.log('hvhvhvhhvvh', albumId);
  const oneAlbumPhoto = await Photo.findAll({ where: { albumid: albumId } });
  const initState = { oneAlbumPhoto };
  // console.log('somehshsh', oneAlbumPhoto);
  res.render('Layout', initState);
});

export default router;
