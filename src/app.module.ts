import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserInfoModule } from './user-info/user-info.module';
import { BasketModule } from './basket/basket.module';
import { OrderModule } from './order/order.module';
import { BasketItemModule } from './basket-item/basket-item.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { WishlistItemModule } from './wishlist-item/wishlist-item.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ProductInfoModule } from './product-info/product-info.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { FilterModule } from './filter/filter.module';
import { FilterItemModule } from './filter-item/filter-item.module';
import { VariableModule } from './variable/variable.module';
import { VariableItemModule } from './variable-item/variable-item.module';
import { RequestModule } from './request/request.module';
import { PostModule } from './post/post.module';
import { PostInfoModule } from './post-info/post-info.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'vannabluerey8',
      database: 'doors',
      models: [],
      autoLoadModels: true,
      synchronize: true
    }),
    AuthModule,
    UserModule,
    UserInfoModule,
    BasketModule,
    OrderModule,
    BasketItemModule,
    WishlistModule,
    WishlistItemModule,
    CategoryModule,
    ProductModule,
    ProductInfoModule,
    CharacteristicModule,
    FilterModule,
    FilterItemModule,
    VariableModule,
    VariableItemModule,
    RequestModule,
    PostModule,
    PostInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
