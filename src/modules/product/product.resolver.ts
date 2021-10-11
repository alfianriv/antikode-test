import { Resolver, Query, Int, Args, Mutation } from "@nestjs/graphql";
import { ProductService } from "./product.service";
import { ProductEntity } from "./entity/product.entity";
import { CreateProductDto } from "./dto/create.dto";
import { UpdateProductDto } from "./dto/update.dto";

@Resolver()
export class ProductResolver {
  constructor(private service: ProductService) {}

  @Query(() => [ProductEntity], { name: "products" })
  getAllProduct() {
    return this.service.getAllProduct();
  }

  @Query(() => ProductEntity, { name: "product" })
  getProductById(@Args("id", { type: () => Int }) id: number) {
    return this.service.getProductById(id);
  }

  @Mutation(() => ProductEntity)
  createProduct(@Args("data") data: CreateProductDto) {
    return this.service.createProduct(data);
  }

  @Mutation(() => ProductEntity)
  updateProduct(
    @Args("id", { type: () => Int }) id: number,
    @Args("data") data: UpdateProductDto,
  ) {
    return this.service.updateProduct(id, data);
  }

  @Mutation(() => ProductEntity)
  deleteProduct(@Args("id") id: number) {
    return this.service.deleteProduct(id);
  }
}
