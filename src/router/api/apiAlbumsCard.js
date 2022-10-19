import express from 'express';
import { Photo } from '../../db/models';

const router = express.Router();

router.get('/home', async (req, res) => {
//   const { albumsId } = req.params;
  const photos = await Photo.findAll();
  // const initState = { albums, photos };
  res.json(photos);
});
// where: { albumid: albumsId } }
export default router;
