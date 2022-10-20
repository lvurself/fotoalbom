import express from 'express';
import path from 'path';
// import MyAlbums from '../../components/album/MyAlbums';
import { Photo, Album } from '../../db/models';

const router = express.Router();

router.get('/home', async (req, res) => {
//   const { albumsId } = req.params;
  const albums = await Album.findAll();
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
  console.log(oneAlbumPhoto, 'hfhfhhfhfhfhfhf');
  //   console.log('hfsahjfgahjgfjhasgfhasjfgasjf', oneAlbumPhoto);
  //   console.log('=========>', req.session);

  res.json(oneAlbumPhoto);
});

router.route('/takephoto/:link')
  .get(async (req, res) => {
    console.log('pppppp', (path.join(__dirname, `../../../storage/images/${req.params.link}`)));
    res.sendFile(path.join(__dirname, `../../../storage/images/${req.params.link}`));
  });

export default router;

// where: { private: false }
// const albums = await Album.findAll({ where: { private: false } });
