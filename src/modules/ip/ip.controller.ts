import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'
import { IpService } from './ip.service'
import { CreateIpDto } from './dto/create-ip.dto'
import { UpdateIpDto } from './dto/update-ip.dto'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'

@Controller('ip')
export class IpController {
  constructor(private readonly ipService: IpService) {}

  // @Post()
  // create(@Body() createIpDto: CreateIpDto) {
  //   return this.ipService.create(createIpDto)
  // }

  @UseGuards(TokenGuardTsGuard)
  @HttpCode(HttpStatus.OK)
  @Post('change')
  change(@Body() updateIpDto: UpdateIpDto) {
    return this.ipService.change(updateIpDto.countryCode, updateIpDto.proxyId)
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ipService.findOne(+id)
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateIpDto: UpdateIpDto) {
  //   return this.ipService.update(+id, updateIpDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ipService.remove(+id)
  // }
}
