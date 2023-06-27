import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductModel } from "./dto/create-product.model";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll()
  }

  @Get(':id')
  getOneById(@Param('id') id: string) {
    return this.productService.getOneById(id)
  }

  @Get('/find-by-category-id/:categoryId')
  getProductsByCategoryId(@Param('categoryId') categoryId: string) {
    return this.productService.getProductsByCategoryId(categoryId)
  }

  @Post()
  create(@Body() dto: CreateProductModel) {
    return this.productService.create(dto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto)
  }

  @Get('/filter/:categoryId')
  getFilteredProducts(@Param('categoryId') categoryId: string, @Query() filter) {
    return this.productService.getFilteredProducts(categoryId, filter)
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id)
  }
}
