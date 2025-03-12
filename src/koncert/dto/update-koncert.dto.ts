import { PartialType } from '@nestjs/mapped-types';
import { CreateKoncertDto } from './create-koncert.dto';
import { IsBoolean,   IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateKoncertDto extends PartialType(CreateKoncertDto) {
    
  @IsNotEmpty()
  @IsString()
  fellepo:string;
  
  @IsNotEmpty()
  @IsDateString()
  kezdesi_ido: Date;
  
  @IsNotEmpty()
  @IsInt()
  idotartam: number;
  @IsNotEmpty()
  @IsBoolean()
  elmarad_e: boolean
}
