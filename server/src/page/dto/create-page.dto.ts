import { IsString, IsOptional } from 'class-validator';

export class CreatePageDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly content?: string;
}
