import {
    BaseEntity,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  // @Entity()
  export class EntityBase extends BaseEntity{
    
    @PrimaryGeneratedColumn('increment')
    id: number;
    @CreateDateColumn({name:'created_at', type: 'timestamptz' })
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', type: 'timestamptz' })
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at', type: 'timestamptz' })
    public deletedAt: Date;
  
  }