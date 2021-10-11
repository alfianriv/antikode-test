import { Module } from "@nestjs/common";
import { BrandService } from "./brand.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BrandResolver } from "./brand.resolver";
import { BrandEntity } from "./entity/brand.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BrandEntity])],
  providers: [BrandService, BrandResolver],
})
export class BrandModule {}
