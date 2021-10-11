import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BrandModule } from "./modules/brand/brand.module";
import { Database } from "./config/database";
import { OutletModule } from "./modules/outlet/outlet.module";
import { ProductModule } from "./modules/product/product.module";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Database],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: configs => configs.get("db_config"),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: "./schema.gql",
    }),
    BrandModule,
    OutletModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
