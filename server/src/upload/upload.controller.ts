import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileUploadOptions } from './upload.config';

@Controller('upload')
export class UploadController {
  @Post('image')
  @UseInterceptors(FileInterceptor('file', fileUploadOptions))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'success',
      file: file,
    };
  }
}
