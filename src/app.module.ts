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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Fbgid~8867',
      database: 's-proxy',
      entities: [User, StaticIp],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    IpModule,
    StaticIpsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
