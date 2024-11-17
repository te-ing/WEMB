import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileUploadOptions } from './upload.config';
import { join } from 'path';

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

  @Get('image/:filename')
  getImage(@Res() res, @Param('filename') filename: string) {
    const filePath = join(__dirname, '../..', 'public/images', filename); // 'public' 폴더에서 파일 찾기

    return res.sendFile(filePath);
  }
}
