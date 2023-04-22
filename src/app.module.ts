import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './modules/users/entities/user.entity'
import { UsersModule } from './modules/users/users.module'
import { AuthModule } from './modules/auth/auth.module'
import { APP_GUARD } from '@nestjs/core'
import { TokenGuardTsGuard } from './guard/token.guard.ts/token.guard.ts.guard'
import { JwtModule } from '@nestjs/jwt'
import { IpModule } from './modules/ip/ip.module'
import { StaticIpsModule } from './modules/static-ips/static-ips.module'
import { StaticIp } from './modules/static-ips/entities/static-ip.entity'
import { SmsManModule } from './modules/sms-man/sms-man.module'
import { SmsManPriceModule } from './modules/sms-man-price/sms-man-price.module'
import { SmsMan } from './modules/sms-man/entities/sms-man.entity'
import { SmsManPrice } from './modules/sms-man-price/entities/sms-man-price.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Fbgid~8867',
      database: 's-proxy',
      entities: [User, StaticIp, SmsMan, SmsManPrice],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    IpModule,
    StaticIpsModule,
    SmsManModule,
    SmsManPriceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
