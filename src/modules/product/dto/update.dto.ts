import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class UpdateProductDto {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  picture?: string;

  @Field(() => Int, { nullable: true })
  price?: number;
}
