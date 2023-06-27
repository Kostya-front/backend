import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";

@Module({
  imports: [
    JwtModule.register({
      secret: 'Secret',
      signOptions: {
        expiresIn: '24h'
      }
    }),
    UserModule
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthModule, JwtModule]
})
export class AuthModule {}
