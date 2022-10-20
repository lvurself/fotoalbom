import express from 'express';
import multer from 'multer';
import fileStorageEngine from '../../middlewares/myMulter';

const router = express.Router();
const upload = multer({ storage: fileStorageEngine });

router.post('/photo', upload.array('images', 3), (req, res) => {
  console.log(req.files);
  res.send('success');
});

export default router;
