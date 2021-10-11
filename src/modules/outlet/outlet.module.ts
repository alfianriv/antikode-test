import { Module } from "@nestjs/common";
import { OutletService } from "./outlet.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OutletResolver } from "./outlet.resolver";
import { OutletEntity } from "./entity/outlet.entity";
import { ProductEntity } from "../product/entity/product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OutletEntity, ProductEntity])],
  providers: [OutletService, OutletResolver],
})
export class OutletModule {}
