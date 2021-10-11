import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateOutletDto } from "./dto/create.dto";
import { UpdateOutletDto } from "./dto/update.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../product/entity/product.entity";
import { OutletEntity } from "./entity/outlet.entity";
import { Repository } from "typeorm";

@Injectable()
export class OutletService {
  constructor(
    @InjectRepository(OutletEntity)
    private repository: Repository<OutletEntity>,
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  getAllOutlet() {
    try {
      return this.repository
        .createQueryBuilder('outlet')
        .leftJoinAndSelect('outlet.brand', 'brand')
        .leftJoinAndSelect('outlet.products', 'product')
        .orderBy('((outlet.latitude-(-6.1753924))*(outlet.latitude-(-6.1753924))) + ((outlet.longitude - (106.827153))*(outlet.longitude - (106.827153)))', 'ASC')
        .getMany();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getOutletById(id: number) {
    try {
      const outlet = await this.repository.findOne(id);
      if (!outlet) {
        throw new NotFoundException(`Outlet with id ${id} not found`);
      }
      return outlet;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  createOutlet(data: CreateOutletDto) {
    try {
      return this.repository.save(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async updateOutlet(id: number, data: UpdateOutletDto) {
    try {
      await this.repository.update({ id: id }, {...data});
      return await this.repository.findOne(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async deleteOutlet(id: number) {
    try {
      return this.repository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
