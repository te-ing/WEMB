import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { PageService } from './page.service';
import { UpdatePageDto } from './dto/update-page.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileUploadOptions } from 'src/upload/upload.config';
import { CreatePageDto } from './dto/create-page.dto';

@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}
  @Post('create')
  @UseInterceptors(FileInterceptor('file', fileUploadOptions))
  async create(
    @Body() createPageDto: CreatePageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('파일이 없습니다.');
    }
    createPageDto.background = file.path;
    return await this.pageService.create(createPageDto);
  }

  @Get()
  findAll() {
    return this.pageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pageService.update(+id, updatePageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageService.remove(id);
  }
}
