import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class UpdateBrandDto {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  logo?: string;

  @Field(() => String, { nullable: true })
  banner?: string;
}
