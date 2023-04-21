import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common'
import { StaticIpsService } from './static-ips.service'
import { CreateStaticIpDto } from './dto/create-static-ip.dto'
import { UpdateStaticIpDto } from './dto/update-static-ip.dto'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'

@Controller('static-ips')
export class StaticIpsController {
  constructor(private readonly staticIpsService: StaticIpsService) {}

  // @Post()
  // create(@Body() createStaticIpDto: CreateStaticIpDto) {
  //   return this.staticIpsService.init()
  // }

  @Get('init')
  findAll() {
    // return this.staticIpsService.init()
  }
  @UseGuards(TokenGuardTsGuard)
  @Get(':id')
  async findByUserId(@Param('id') id: string, @Query('offset') offset: string) {
    return await this.staticIpsService.findByUserId(+id, +offset)
  }

  @UseGuards(TokenGuardTsGuard)
  @Post('buy')
  async buyStaticIp(@Body() data: any) {
    return await this.staticIpsService.buyStaticIp(data)
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateStaticIpDto: UpdateStaticIpDto,
  // ) {
  //   return this.staticIpsService.update(+id, updateStaticIpDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.staticIpsService.remove(+id)
  // }
}
