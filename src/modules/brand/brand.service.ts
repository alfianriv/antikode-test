import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateBrandDto } from "./dto/create.dto";
import { UpdateBrandDto } from "./dto/update.dto";
import { BrandEntity } from "./entity/brand.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(BrandEntity)
    private repository: Repository<BrandEntity>,
  ) { }

  async getAllBrand() {
    try {
      return this.repository
        .createQueryBuilder('brand')
        .leftJoinAndSelect('brand.outlets', 'outlet')
        .leftJoinAndSelect('outlet.products', 'product')
        .orderBy('((outlet.latitude-(-6.1753924))*(outlet.latitude-(-6.1753924))) + ((outlet.longitude - (106.827153))*(outlet.longitude - (106.827153)))')
        .getMany()
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getBrandById(id: number) {
    try {
      const brand = await this.repository
        .createQueryBuilder('brand')
        .where('brand.id = :id', { id: id })
        .leftJoinAndSelect('brand.outlets', 'outlet')
        .leftJoinAndSelect('outlet.products', 'product')
        .orderBy('((outlet.latitude-(-6.1753924))*(outlet.latitude-(-6.1753924))) + ((outlet.longitude - (106.827153))*(outlet.longitude - (106.827153)))')
        .getOne();
      if (!brand) {
        throw new NotFoundException(`Brand with id ${id} not found`);
      }
      return brand;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async createBrand(brand: CreateBrandDto) {
    try {
      return await this.repository.save(brand);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async updateBrand(id: number, data: UpdateBrandDto) {
    try {
      await this.repository.update({ id: id }, { ...data });
      return await this.repository.findOne(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async deleteBrand(id: number) {
    try {
      return await this.repository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
