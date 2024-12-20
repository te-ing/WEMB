import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Page } from './schemas/page.schema';
import { Model } from 'mongoose';

@Injectable()
export class PageService {
  constructor(@InjectModel(Page.name) private pageModel: Model<Page>) {}
  async create(createPageDto: CreatePageDto): Promise<Page> {
    const createdPage = new this.pageModel(createPageDto);
    return createdPage.save();
  }

  findAll(): Promise<Page[]> {
    return this.pageModel.find().exec();
  }

  findOne(id: string) {
    return this.pageModel.findById(id).exec();
  }

  update(id: number, updatePageDto: UpdatePageDto) {
    return `This action updates a #${id} page`;
  }

  remove(id: string) {
    return this.pageModel.findByIdAndDelete(id).exec();
  }
}
