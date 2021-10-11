import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OutletEntity } from "src/modules/outlet/entity/outlet.entity";
import { ObjectType, Field, Int } from "@nestjs/graphql";

@Entity({ name: "tb_brand" })
@ObjectType()
export class BrandEntity {
  @PrimaryGeneratedColumn("increment")
  @Field(() => Int, { nullable: true })
  id?: number;

  @Column({ type: "varchar", length: 255, unique: true })
  @Field(() => String)
  name: string;

  @Column({ type: "varchar", length: 255 })
  @Field(() => String)
  logo: string;

  @Column({ type: "varchar", length: 255 })
  @Field(() => String)
  banner: string;

  @OneToMany(
    () => OutletEntity,
    outlet => outlet.brand,
    { eager: true },
  )
  @Field(() => [OutletEntity], { nullable: true })
  outlets?: OutletEntity[];
}
