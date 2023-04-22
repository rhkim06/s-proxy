import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common'
import { SmsManService } from './sms-man.service'
import { CreateSmsManDto } from './dto/create-sms-man.dto'
import { UpdateSmsManDto } from './dto/update-sms-man.dto'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'
import { SmsManPriceService } from 'src/modules/sms-man-price/sms-man-price.service'

@Controller('sms-a')
export class SmsManController {
  constructor(
    private readonly smsManService: SmsManService,
    private readonly smsManPriceService: SmsManPriceService,
  ) {}

  @UseGuards(TokenGuardTsGuard)
  @Post()
  async create(@Body() createSmsManDto: any) {
    return await this.smsManService.create(createSmsManDto)
  }

  @UseGuards(TokenGuardTsGuard)
  @Post('phone-number')
  async getPhoneNumber(@Body() payload: any) {
    return await this.smsManService.getPhoneNumber(payload)
  }

  @UseGuards(TokenGuardTsGuard)
  @Post('code')
  async getSmsCode(@Body() payload: any) {
    return await this.smsManService.getSmsCode(payload)
  }

  @UseGuards(TokenGuardTsGuard)
  @Get(':id')
  async findAllSmsA(@Param('id') id: number) {
    return await this.smsManService.findAllSmsA(id)
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.smsManService.findOne(+id)
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSmsManDto: UpdateSmsManDto) {
  //   return this.smsManService.update(+id, updateSmsManDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.smsManService.remove(+id)
  // }
}
