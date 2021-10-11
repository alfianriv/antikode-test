import { Resolver, Query, Args, Int, Mutation } from "@nestjs/graphql";
import { OutletService } from "./outlet.service";
import { OutletEntity } from "./entity/outlet.entity";
import { CreateOutletDto } from "./dto/create.dto";
import { UpdateOutletDto } from "./dto/update.dto";

@Resolver()
export class OutletResolver {
  constructor(private service: OutletService) {}

  @Query(() => [OutletEntity], { name: "outlets" })
  getAllOutlet() {
    return this.service.getAllOutlet();
  }

  @Query(() => OutletEntity, { name: "outlet" })
  getOutletById(@Args("id", { type: () => Int }) id: number) {
    return this.service.getOutletById(id);
  }

  @Mutation(() => OutletEntity)
  createOutlet(@Args("data") data: CreateOutletDto) {
    return this.service.createOutlet(data);
  }

  @Mutation(() => OutletEntity)
  updateOutlet(@Args("id") id: number, @Args("data") data: UpdateOutletDto) {
    return this.service.updateOutlet(id, data);
  }

  @Mutation(() => OutletEntity)
  deleteOutlet(@Args("id") id: number) {
    return this.service.deleteOutlet(id);
  }
}
