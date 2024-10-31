import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BoxDocument = HydratedDocument<Box>;

@Schema()
export class Box {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  top: string;

  @Prop({ required: true })
  left: string;

  @Prop({ required: true })
  width: string;

  @Prop({ required: true })
  height: string;

  @Prop({ required: true })
  border: string;

  @Prop({ default: 1 })
  zIndex: number;

  @Prop()
  borderRadius: string;

  @Prop()
  padding: string;

  @Prop()
  margin: string;

  @Prop()
  text: string;

  @Prop()
  alignItems: string;

  @Prop()
  justifyContent: string;

  @Prop()
  fontSize: string;

  @Prop()
  fontWeight: string;
}

export const BoxSchema = SchemaFactory.createForClass(Box);
