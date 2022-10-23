import express from 'express';
import path from 'path';
// import MyAlbums from '../../components/album/MyAlbums';
import { Photo, Album } from '../../db/models';
import restriction from '../../middlewares/restriction';

const router = express.Router();

router.get('/home', async (req, res) => {
  const albums = await Album.findAll({ where: { private: false } });
  res.json(albums);
});
router.get('/home/photos', async (req, res) => {
  const photos = await Photo.findAll();
  res.json(photos);
});
// where: { albumid: albumsId } }
router.get('/home/myalbums', async (req, res) => {
  const myalbums = await Album.findAll({ where: { userid: String(res.locals.user.id) } });
  res.json(myalbums);
});

router.get('/home/album/:albumId', async (req, res) => {
  const { albumId } = req.params;
  const oneAlbumPhoto = await Photo.findAll({ where: { albumid: albumId } });

  res.json(oneAlbumPhoto);

  // console.log(oneAlbumPhoto, 'hfhfhhfhfhfhfhf');
  //   console.log('hfsahjfgahjgfjhasgfhasjfgasjf', oneAlbumPhoto);
  //   console.log('=========>', req.session);
});

router.get('/home/myalbums/:albumId', async (req, res) => {
  const { albumId } = req.params;
  const oneAlbumPhoto = await Photo.findAll({ where: { albumid: albumId } });
  res.json(oneAlbumPhoto);
});

router.patch('/home/myalbums/:albumId/edit', async (req, res) => {
  const { albumId } = req.params;
  console.log(req.body);
  const edit = Album.update({
    name: req.body.name,
    description: req.body.description,
    private: req.body.private,
  }, { where: { id: albumId } });
  res.json(edit);
});

router.delete('/home/myalbums/:albumId/delete', async (req, res) => {
  const { albumId } = req.params;
  await Album.destroy({ where: { id: albumId } });
  res.sendStatus(200);
});

router.route('/takephoto/:link')
  .get(async (req, res) => {
    // console.log('pppppp', (path.join(__dirname, `../../../storage/images/${req.params.link}`)));
    res.sendFile(path.join(__dirname, `../../../storage/images/${req.params.link}`));
  });

export default router;

// where: { private: false }
// const albums = await Album.findAll({ where: { private: false } });
