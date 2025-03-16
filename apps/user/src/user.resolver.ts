import { BadRequestException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  RegisterResponse,
} from './user.type';
import { 
  RegisterDto,
} from './dto/user.dto';
import { Response } from 'express';

import { UserService } from './user.service';
import { User } from './user.entities';

@Resolver('User')
// @UseFilters
export class UsersResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [User])
  async getAllUsers(){
    return this.userService.getAllUsers()
  }
  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerDto') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill all fields');
    }
  
    const user = await this.userService.register(registerDto);
  
  
    return {user} ; // Ensure this always returns a valid User object
  }
  
}