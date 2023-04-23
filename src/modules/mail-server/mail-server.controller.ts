import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common'
import { MailServerService } from './mail-server.service'
import { CreateMailServerDto } from './dto/create-mail-server.dto'
import { UpdateMailServerDto } from './dto/update-mail-server.dto'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'

@Controller('mail-server')
export class MailServiceController {
  constructor(private readonly mailServiceService: MailServerService) {}

  @UseGuards(TokenGuardTsGuard)
  @Post('add')
  async create(@Body() payload: any) {
    return this.mailServiceService.create(payload)
  }

  @UseGuards(TokenGuardTsGuard)
  @Post()
  async findAllOutLook(@Body() payload: any) {
    try {
      const res = await this.mailServiceService.findAllUnread(payload)
      return res
    } catch (error) {
      console.log(error)
    }
  }
  @UseGuards(TokenGuardTsGuard)
  @Get(':id')
  async findAll(@Param('id') id: number) {
    return await this.mailServiceService.findAll(+id)
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMailServiceDto: UpdateMailServerDto,
  // ) {
  //   return this.mailServiceService.update(+id, updateMailServiceDto)
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.mailServiceService.remove(+id)
  // }
}
