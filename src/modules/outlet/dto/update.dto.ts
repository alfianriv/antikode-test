import { InputType, Field, Float, Int } from "@nestjs/graphql";

@InputType()
export class UpdateOutletDto {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  picture?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Int, { nullable: true })
  brand_id?: number;
}
