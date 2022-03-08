import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Unique } from './../../common';
import { SameAs } from './../../common/validator/same-as.validator';
import { Users } from '../../user/entities/user.entity';

export class RegisterPayload {
  @ApiProperty({
    required: true,
  })
  @IsEmail()
  @Unique([Users])
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @ApiProperty({ required: true })
  @SameAs('password')
  passwordConfirmation: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  contact: Number;
}
