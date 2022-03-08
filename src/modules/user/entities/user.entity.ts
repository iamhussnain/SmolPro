import { EntityBase } from 'modules/base/entities/entitybase.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { PasswordTransformer } from '../password.transformer';
// import { UserRoles } from './user_roles.entity';

@Entity('users')
export class Users extends EntityBase{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 255 })
  first_name: string;

  @Column({ length: 255 })
  last_name: string;

  @Column({ length: 255 })
  email: string;

  @Column()
  contact: Number;

  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  password: string;

  // @OneToMany(
  //   type => UserRoles,
  //   userRole => userRole.user
  // )
  // userRole: UserRoles[];
}

export class UserFillableFields {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  contact: Number;
}
