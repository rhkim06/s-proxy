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
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto)
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll()
  // }

  @UseGuards(TokenGuardTsGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @UseGuards(TokenGuardTsGuard)
  @Get('dynamic-ip/:id')
  findOneDynamicIp(@Param('id') id: string) {
    return this.usersService.findOneDynamicIp(+id)
  }

  @UseGuards(TokenGuardTsGuard)
  @Post('profile')
  findOneByName(@Body() user: Record<string, any>) {
    return this.usersService.findOneByName(user.name)
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id)
  // }
}
