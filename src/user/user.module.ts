import { forwardRef, Module } from "@nestjs/common";
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModel } from "./entities/user.model";
import { UserInfoModule } from "../user-info/user-info.module";
import { UserInfoService } from "../user-info/user-info.service";
import { BasketModule } from "../basket/basket.module";
import { BasketService } from "../basket/basket.service";
import { BasketModel } from "../basket/entities/basket.model";
import { UserInfoModel } from "../user-info/entities/user-info.model";
import { WishlistModule } from "../wishlist/wishlist.module";
import { WishlistService } from "../wishlist/wishlist.service";
import { WishlistModel } from "../wishlist/entities/wishlist.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [SequelizeModule.forFeature(
    [UserModel, BasketModel, UserInfoModel, WishlistModel]),
    UserInfoModule,
    BasketModule,
    WishlistModule,
    forwardRef(() => AuthModule)
  ],
  providers: [UserService, UserInfoService, BasketService, WishlistService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
