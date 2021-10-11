import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateProductDto {
  @Field(() => Int)
  outlet_id: number

  @Field(() => String)
  name: string;

  @Field(() => String)
  picture: string;

  @Field(() => Int)
  price: number;
}
