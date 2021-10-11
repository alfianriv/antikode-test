import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { BrandEntity } from "src/modules/brand/entity/brand.entity";
import { ProductEntity } from "src/modules/product/entity/product.entity";
import { ObjectType, Field, Int, Float } from "@nestjs/graphql";

@Entity({ name: "tb_outlet" })
@ObjectType()
export class OutletEntity {
  @PrimaryGeneratedColumn("increment")
  @Field(() => Int, { nullable: true })
  id?: number;

  @Column({ type: "varchar", length: 255, unique: true })
  @Field(() => String)
  name: string;

  @Column({ type: "varchar", length: 255 })
  @Field(() => String)
  image: string;

  @Column({ type: "text" })
  @Field(() => String)
  address: string;

  @Column({ type: "float" })
  @Field(() => Float)
  longitude: number;

  @Column({ type: "float" })
  @Field(() => Float)
  latitude: number;

  @Column({ type: "int" })
  @Field(() => Int)
  brand_id: number;

  @ManyToOne(
    () => BrandEntity,
    brand => brand.outlets,
  )
  @JoinColumn({ name: "brand_id", referencedColumnName: "id" })
  @Field(() => BrandEntity)
  brand: BrandEntity;

  @OneToMany(
    () => ProductEntity,
    product => product.outlet,
    { eager: true },
  )
  @Field(() => [ProductEntity], { nullable: true })
  products?: ProductEntity[];
}
