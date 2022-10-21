import { Album } from '../db/models';

export default function restriction(req, res, next) {
  const { albumId } = req.params;
  if ((Album.id === albumId) && (Album.userid === req.session?.user.id)) {
    next();
  } else { console.error({ message: 'аахаххаха, хитрец, себя удали)))))' }); }
}
