import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { CharacteristicModel } from "./entities/characteristic.model";
import { CreateCharacteristicDto } from "./dto/create-characteristic.dto";
import { distinct } from "rxjs";
import { ProductModel } from "../product/entities/product.model";

@Injectable()
export class CharacteristicService {
  constructor(@InjectModel(CharacteristicModel) private readonly characteristicModel: typeof CharacteristicModel) {}

  async getAll() {
    return await this.characteristicModel.findAll({include: {all: true}})
  }

  async create(dto: CreateCharacteristicDto) {
    return await this.characteristicModel.create({...dto})
  }

  async getAllByProductInfoId(productId: string) {
    return await this.characteristicModel.findAll(
      {
        include: {model: ProductModel},
        attributes:['key', 'value'],
        where: {
        '$product.id$': productId
      }}
    )
  }

  async getFilter(id: string, obj: {keys: string[]}) {
    const totalCharacteristics: CharacteristicModel[] = []
    const characteristics = await this.characteristicModel.findAll({include: {all: true, nested: true}, where: {
        key: obj.keys,
        '$product.category.id$': id,
    }})

    characteristics.forEach(item => {
      const hasDuplicate = totalCharacteristics.some(characteristic => characteristic.value === item.value);
      if (!hasDuplicate) {
        totalCharacteristics.push(item);
      }
    });
    return totalCharacteristics
  }

  async deleteOne(id: string) {
    return await this.characteristicModel.destroy({where: {id}})
  }
}
