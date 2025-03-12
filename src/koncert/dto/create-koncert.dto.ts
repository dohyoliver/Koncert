import { IsDateString, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateKoncertDto {
  
  @IsNotEmpty()
  @IsString()
  fellepo:string;
  
  @IsNotEmpty()
  @IsDateString()
  kezdesi_ido: Date;
  
  @IsNotEmpty()
  @IsInt()
  idotartam: number;

}
