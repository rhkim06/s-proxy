import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common'
import { Roles } from 'src/decorator/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { ImageListPayload, ImageListRecord } from 'src/types'
import { ImageServerService } from './image-server.service'

@Controller('image-server')
export class ImageServerController {
  constructor(private readonly imageServerService: ImageServerService) {}

  @Post()
  create(@Body() createImageDownloadDto) {
    return this.imageServerService.create(createImageDownloadDto)
  }
  @Roles(Role.Admin)
  @Get('download')
  async findAll(@Query('count') count: number) {
    const allPromises = []
    const _count = count
    for (let i = 0; i < _count; i++) {
      allPromises.push(await this.imageServerService.findAll(count))
    }
    const res = Promise.all(allPromises)
    return res
  }
  @Roles(Role.Admin)
  @Post('list')
  async findAllImageList(@Body() paylaod: ImageListPayload) {
    const { page, type } = paylaod
    return await this.imageServerService.findAllImageList(page, type)
  }
  @Roles(Role.Admin)
  @Post('delete')
  async deleteImage(@Body() payload: ImageListRecord) {
    const { id, imageUrl } = payload
    return await this.imageServerService.deleteImage(id, imageUrl)
  }
}
