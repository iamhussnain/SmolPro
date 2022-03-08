import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from '.';
// import { UserRoles } from './entities/user_roles.entity';
import { UserRepository } from './user.repository';
import { UsersService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  exports: [UsersService],
  providers: [UsersService],
})
export class UserModule {}
