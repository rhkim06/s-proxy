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
import { UpdateCreateProfileDto } from './dto/update-create-profile.dto'

@Controller('create-profile')
export class CreateProfileController {
  constructor(private readonly createProfileService: CreateProfileService) {}

  @Post()
  create(@Body() createCreateProfileDto: CreateCreateProfileDto) {
    return this.createProfileService.create(createCreateProfileDto)
  }
  @UseGuards(TokenGuardTsGuard)
  @Get()
  findOneProfile() {
    return this.createProfileService.findOneProfile()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createProfileService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCreateProfileDto: UpdateCreateProfileDto,
  ) {
    return this.createProfileService.update(+id, updateCreateProfileDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.createProfileService.remove(+id)
  }
}
