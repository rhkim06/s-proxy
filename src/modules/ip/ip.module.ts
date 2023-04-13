import { Module } from '@nestjs/common'
import { IpService } from './ip.service'
import { IpController } from './ip.controller'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [IpController],
  providers: [IpService],
})
export class IpModule {}
