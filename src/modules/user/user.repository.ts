import { EntityRepository, Repository } from 'typeorm';
import { Users, UserFillableFields } from './entities/user.entity';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  async get(id: number) {
    return this.findOne({ id });
  }

  async getByEmail(email: string) {
    return await this.findOne({ email });
  }

  async createUser(payload: UserFillableFields) {
    return await this.save(payload);
  }
}
