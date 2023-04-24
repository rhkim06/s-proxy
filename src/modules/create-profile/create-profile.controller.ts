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
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'
import { CreateProfileService } from './create-profile.service'
import { CreateCreateProfileDto } from './dto/create-create-profile.dto'

@Controller('create-profile')
export class CreateProfileController {
  constructor(private readonly createProfileService: CreateProfileService) {}

  @Post()
  create(@Body() createCreateProfileDto: CreateCreateProfileDto) {
    return this.createProfileService.create(createCreateProfileDto)
  }
  @UseGuards(TokenGuardTsGuard)
  @Get('name')
  findOneProfile() {
    return this.createProfileService.findOneProfile()
  }

  @Post('add-last-name')
  addLastName(@Body() payload: any) {
    return this.createProfileService.addLastName(payload.name)
  }
}
