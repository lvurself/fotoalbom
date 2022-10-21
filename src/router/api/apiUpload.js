import express from 'express';
import multer from 'multer';
import { Photo, Album } from '../../db/models';
import fileStorageEngine from '../../middlewares/myMulter';

const router = express.Router();
const upload = multer({ storage: fileStorageEngine });

router.post('/photo', upload.array('images', 10), async (req, res) => {
  // console.log('reqfiles', (req.files));
  // console.log('reqbody', req.body.title);
  const alb = await Album.create({
    name: req.body.title,
    description: req.body.description,
    userid: req.session.user.id,
  });

  (req.files).forEach((element) => {
    // console.log(element, 'ghjklkjhgfghj');
    Photo.create({
      name: element.filename,
      albumid: alb.id,
    });
  });
  return res.sendStatus(200);
});

export default router;
