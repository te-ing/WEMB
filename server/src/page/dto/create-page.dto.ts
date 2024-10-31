import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBoxDto } from './create-box.dto';

export class CreatePageDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  background?: string;

  @IsOptional()
  @IsString()
  width?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateBoxDto)
  box?: CreateBoxDto[];
}
