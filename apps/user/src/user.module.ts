import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2, // This is fine if you're using Apollo Federation 2 features
      },
    }),
    PrismaModule
  
  ]
  ,
  providers: [UsersResolver, UserService],
})
export class UserModule {}
