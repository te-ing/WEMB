import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Box, BoxSchema } from './box.schema';

export type PageDocument = HydratedDocument<Page>;

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class Page {
  @Prop({ required: true })
  name: string;

  @Prop()
  background: string;

  @Prop()
  width: string;

  @Prop({ type: [{ type: BoxSchema }], default: [] })
  box: Box[];

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date;

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date;
}

export const PageSchema = SchemaFactory.createForClass(Page);
