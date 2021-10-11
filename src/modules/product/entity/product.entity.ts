import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { OutletEntity } from "src/modules/outlet/entity/outlet.entity";
import { ObjectType, Int, Field } from "@nestjs/graphql";

@Entity({ name: "tb_product" })
@ObjectType()
export class ProductEntity {
  @PrimaryGeneratedColumn("increment")
  @Field(() => Int, { nullable: true })
  id?: number;

  @Column({ type: "varchar", length: 255, update: true })
  @Field(() => String)
  name: string;

  @Column({ type: "varchar", length: 255 })
  @Field(() => String)
  picture: string;

  @Column({ type: "int", default: 0 })
  @Field(() => Int)
  price: number;

  @Column({ type: "int" })
  @Field(() => Int)
  outlet_id: number;

  @ManyToOne(
    () => OutletEntity,
    outlet => outlet.products,
  )
  @Field(() => OutletEntity, { nullable: true })
  @JoinColumn({ name: "outlet_id", referencedColumnName: "id" })
  outlet?: OutletEntity;
}
