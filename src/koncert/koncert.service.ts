import { Injectable } from '@nestjs/common';
import { CreateKoncertDto } from './dto/create-koncert.dto';
import { UpdateKoncertDto } from './dto/update-koncert.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KoncertService {
  constructor(private readonly db: PrismaService){

  }
 async create(data: CreateKoncertDto) {
 return this.db.koncert.create({
  data,
 })
  }

  findAll() {
    return this.db.koncert.findMany();
  }

  findOne(id: number) {
    return this.db.koncert.findUnique({where: {id}});
  }

 async update(id: number, updateKoncertDto: UpdateKoncertDto) {
    try{
      return await this.db.koncert.update({
       data: updateKoncertDto,
       where: {id}
     });
   }catch(error){
     return error;
   };
  }

  async remove(id: number) {
    try{
      await this.db.koncert.delete({
        where: {id}
      })
      return true
    }catch{
      return false
    };
  }
}
