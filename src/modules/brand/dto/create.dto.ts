import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateBrandDto {
  @Field(() => String)
  name: string;

  @Field(() => String)
  logo: string;

  @Field(() => String)
  banner: string;
}
