import { InputType, Field, Float, Int } from "@nestjs/graphql";

@InputType()
export class CreateOutletDto {
  @Field(() => String)
  name: string;

  @Field(() => String)
  image: string;

  @Field(() => String)
  address: string;

  @Field(() => Float)
  longitude: number;

  @Field(() => Float)
  latitude: number;

  @Field(() => Int)
  brand_id: number;
}
