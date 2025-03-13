import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';
import { PrismaService } from 'libs/prisma/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor( private readonly prisma:PrismaService) {}

  async createUser(data: RegisterDto) {
    return this.prisma.user.create({ data });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
