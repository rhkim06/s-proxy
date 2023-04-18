import { Module } from '@nestjs/common'
import { StaticIpsService } from './static-ips.service'
import { StaticIpsController } from './static-ips.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StaticIp } from './entities/static-ip.entity'
import { HttpModule, HttpService } from '@nestjs/axios'
import { UsersModule } from '../users/users.module'

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([StaticIp])],
  controllers: [StaticIpsController],
  providers: [StaticIpsService],
})
export class StaticIpsModule {}
