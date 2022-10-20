import express from 'express';
import MyAlbums from '../../components/album/MyAlbums';
import { Photo, Album } from '../../db/models';

const router = express.Router();

router.get('/home', async (req, res) => {
//   const { albumsId } = req.params;
  const albums = await Album.findAll({ where: { private: true } });
  // const initState = { albums, photos };
  res.json(albums);
});
router.get('/home/photos', async (req, res) => {
  const photos = await Photo.findAll();
  res.json(photos);
});
// where: { albumid: albumsId } }

router.get('/home/album/:albumId', async (req, res) => {
  const { albumId } = req.params;
  const oneAlbumPhoto = await Photo.findAll({ where: { albumid: albumId } });
  //   console.log('hfsahjfgahjgfjhasgfhasjfgasjf', oneAlbumPhoto);
  //   console.log('=========>', req.session);

  res.json(oneAlbumPhoto);
});
export default router;
