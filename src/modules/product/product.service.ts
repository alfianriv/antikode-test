import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { UpdateProductDto } from "./dto/update.dto";
import { CreateProductDto } from "./dto/create.dto";
import { ProductEntity } from "./entity/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>) {}

  getAllProduct() {
    try {
      return this.repository.find();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getProductById(id: number) {
    try {
      const product = await this.repository.findOne(id);
      if (!product) {
        throw new NotFoundException(`Product with id ${id} not found`);
      }
      return product;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  createProduct(data: CreateProductDto) {
    try {
      return this.repository.save(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async updateProduct(id: number, data: UpdateProductDto) {
    try {
      await this.repository.update({ id: id }, {...data});
      return await this.repository.findOne(id)
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async deleteProduct(id: number) {
    try {
      return this.repository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
