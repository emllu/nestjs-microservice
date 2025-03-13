import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'libs/prisma/prisma/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,  // Enables automatic schema generation
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver, PrismaService], // Removed duplicate UserService
})
export class UserModule {}
