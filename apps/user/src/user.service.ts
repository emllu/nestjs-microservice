import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UserService {
  constructor( private readonly prisma:PrismaService ) {}

  async register(data: RegisterDto) {
    const {name,email,password,phone_number}=data
    const isEmailExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (isEmailExist) {
      throw new BadRequestException('User already exist with this email!');
    }
    const user= await this.prisma.user.create({
      data:{
        name:name,
        email:email,
        phone_number:phone_number,
        password:password

      }
     
    })
    return user
  }
  async getAllUsers(){
    const user= await this.prisma.user.findMany({})
    return {
      user
    };
  }
}
