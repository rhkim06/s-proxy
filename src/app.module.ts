import { Logger, MiddlewareConsumer, Module } from '@nestjs/common'
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
import { WinstonModule } from 'nest-winston'
import * as winston from 'winston'
import DailyRotateFile = require('winston-daily-rotate-file')
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware'
import { MailServerModule } from './modules/mail-server/mail-server.module'
import { MailServer } from './modules/mail-server/entities/mail-server.entity'
import { IpCheckService } from './modules/ip-check/ip-check.service'
import { IpCheckController } from './modules/ip-check/ip-check.controller'
import { IpCheckModule } from './modules/ip-check/ip-check.module'
const format = winston.format
const path = require('path')
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Fbgid~8867',
      database: 's-proxy',
      entities: [User, StaticIp, SmsMan, SmsManPrice, MailServer],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    IpModule,
    StaticIpsModule,
    SmsManModule,
    SmsManPriceModule,
    MailServerModule,
    IpCheckModule,
  ],
  controllers: [],
  providers: [Logger],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*')
  }
}
