import { Resolver, Query, Args, Int, Mutation } from "@nestjs/graphql";
import { BrandEntity } from "./entity/brand.entity";
import { BrandService } from "./brand.service";
import { CreateBrandDto } from "./dto/create.dto";
import { UpdateBrandDto } from "./dto/update.dto";

@Resolver(() => BrandEntity)
export class BrandResolver {
  constructor(private service: BrandService) {}

  @Query(() => [BrandEntity], { name: "brands" })
  getAllBrand() {
    return this.service.getAllBrand();
  }

  @Query(() => BrandEntity, { name: "brand" })
  getBrandById(@Args("id", { type: () => Int }) id: number) {
    return this.service.getBrandById(id);
  }

  @Mutation(() => BrandEntity)
  createBrand(@Args("data") data: CreateBrandDto) {
    return this.service.createBrand(data);
  }

  @Mutation(() => BrandEntity)
  updateBrand(
    @Args("id", { type: () => Int }) id: number,
    @Args("data") data: UpdateBrandDto,
  ) {
    return this.service.updateBrand(id, data);
  }

  @Mutation(() => BrandEntity)
  deleteBrand(@Args("id", { type: () => Int }) id: number) {
    return this.service.deleteBrand(id);
  }
}
