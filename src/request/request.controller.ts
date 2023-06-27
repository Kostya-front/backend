import { Body, Controller, Get, Post } from "@nestjs/common";
import { RequestService } from "./request.service";
import { CreateRequestDto } from "./dto/create-request.dto";

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  getAll() {
    return this.requestService.getAll()
  }

  @Post()
  create(@Body() dto: CreateRequestDto) {
    return this.requestService.create(dto)
  }
}
