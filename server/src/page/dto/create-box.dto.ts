import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateBoxDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  top: string;

  @IsNotEmpty()
  @IsString()
  left: string;

  @IsNotEmpty()
  @IsString()
  width: string;

  @IsNotEmpty()
  @IsString()
  height: string;

  @IsNotEmpty()
  @IsString()
  border: string;

  @IsOptional()
  @IsNumber()
  zIndex?: number;

  @IsOptional()
  @IsString()
  borderRadius?: string;

  @IsOptional()
  @IsString()
  padding?: string;

  @IsOptional()
  @IsString()
  margin?: string;

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsString()
  alignItems?: string;

  @IsOptional()
  @IsString()
  justifyContent?: string;

  @IsOptional()
  @IsString()
  fontSize?: string;

  @IsOptional()
  @IsString()
  fontWeight?: string;
}
