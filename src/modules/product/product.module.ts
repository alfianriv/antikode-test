import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductResolver } from "./product.resolver";
import { ProductEntity } from "./entity/product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
