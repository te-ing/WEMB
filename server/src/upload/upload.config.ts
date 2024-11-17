import { diskStorage } from 'multer';
import { extname } from 'path';

export const fileUploadOptions = {
  storage: diskStorage({
    destination: './uploads/images',
    filename: (req, file, callback) => {
      const ext = extname(file.originalname);
      const filename = `${Date.now()}${ext}`;
      callback(null, filename);
    },
  }),
};
