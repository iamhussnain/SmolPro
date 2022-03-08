import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserFillableFields } from './entities/user.entity';
import { UserRepository } from './user.repository';
const {AUTH:{ERRORS:{EMAIL_EXIST}}} = require('../common/messages');

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
  async get(id: number) {
    const a = await this.userRepository.findOne({ id });
    return a;
  }
  
  async create(payload: UserFillableFields) {
    const user = await this.getByEmail(payload.email);
    if (user) {
      throw new NotAcceptableException(
        EMAIL_EXIST,
      );
    }
    return this.userRepository.createUser(payload);
  }

  async getByEmail(email: string) {
    return await this.userRepository.getByEmail(email);
  }
}
