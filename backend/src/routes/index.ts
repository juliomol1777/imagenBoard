import {Router} from 'express';
const router = Router();
import {createPhotos, getPhotos, getPhoto, deletePhotos, updatePhotos} from '../controllers/photoControllers';
import multer from '../libs/multer';

router.route('/photos')
    .post(multer.single('image') ,createPhotos)
    .get(getPhotos)

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhotos)
    .put(updatePhotos)

export default router;