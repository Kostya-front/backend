import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "../user/dto/create-user.dto";
import * as bcrypt from 'bcrypt'
import { UserModel } from "../user/entities/user.model";


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async login(dto: CreateUserDto) {
    try {
      const user = await this.validateUser(dto)
      const token = await this.generateToken(user)
      return  {
        user, token
      }
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async register(dto: CreateUserDto) {
    try {
      const candidate = await this.userService.getByEmail(dto.email)

      if(candidate) {
        throw new HttpException('Емаил уже занят', HttpStatus.CONFLICT)
      }

      const hashPassword = await bcrypt.hash(dto.password, 5)

      const user = await this.userService.create({...dto, password: hashPassword})

      return this.generateToken(user)
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  private async validateUser(dto: CreateUserDto) {
    try {
      const user = await this.userService.getByEmail(dto.email)
      const password = await bcrypt.compare(dto.password, user.password)

      if(user && password) {
        return user
      }

    } catch (e) {
      throw new UnauthorizedException({message: 'пользователь не найден'})
    }
  }

  private async generateToken(user: UserModel) {
    const payload = {
      userId: user.id,
      email: user.email,
      password: user.password,
      basket: user.basket,
      wishlist: user.wishlist,
      username: user.username
    }
    return this.jwtService.sign(payload)
  }
}
