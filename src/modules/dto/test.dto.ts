import { IsInt, IsNotEmpty } from "class-validator";

export class CreateTestDto {
  @IsNotEmpty({ message: 'Require users Id' })
  @IsInt()
  userId: number;

  date: string;
  questions: number[];
}
