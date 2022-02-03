import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Require users first name' })
  @Length(3, 50)
  first_name: string;

  @IsNotEmpty({ message: 'Require users last name' })
  @Length(3, 50)
  last_name: string;

  @IsNotEmpty({ message: 'Require users email' })
  @Length(10, 100)
  email: string;
}
