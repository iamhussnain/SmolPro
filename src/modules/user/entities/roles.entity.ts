import { EntityBase } from 'modules/base/entities/entitybase.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
// import { UserRoles } from './user_roles.entity';

@Entity('roles')
export class Roles extends EntityBase{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 255 })
  name: string;

  // @OneToMany(
  //   type => UserRoles,
  //   userRole => userRole.role
  // )
  // userRole: UserRoles[];
}

export class RolesFillableFields {
  name: string;
}
