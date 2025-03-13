import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { RegisterDto } from './dto/user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService,
   
  ) {}

  @Mutation(() => User)
  async registerUser(@Args('data') createUserDto: RegisterDto,@Context () context:{res:Response}
) {
    return this.userService.createUser(createUserDto);
  }

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }
}
