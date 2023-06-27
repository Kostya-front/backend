import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CategoryModel } from "./entities/category.model";
import { throwErrors } from "../user/helpers/throwErrors";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(CategoryModel) private readonly categoryModel: typeof CategoryModel) {}

  async getAll() {
    try {
      return await this.categoryModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getOneById(categoryId: string) {
    try {
      return await this.categoryModel.findOne({where: {id: categoryId}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateCategoryDto) {
    try {
      return await this.categoryModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
