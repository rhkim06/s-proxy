import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'
import { IpCheckService } from './ip-check.service'

@Controller('ip-check')
export class IpCheckController {
  constructor(private readonly ipCheckService: IpCheckService) {}

  @UseGuards(TokenGuardTsGuard)
  @Get()
  async checkIp(@Query('ip') ip?: string) {
    return await this.ipCheckService.checkIp(ip)
  }
}
