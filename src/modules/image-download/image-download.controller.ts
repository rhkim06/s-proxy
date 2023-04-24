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
import { ImageDownloadService } from './image-download.service'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'

@Controller('image-download')
export class ImageDownloadController {
  constructor(private readonly imageDownloadService: ImageDownloadService) {}

  @Post()
  create(@Body() createImageDownloadDto) {
    return this.imageDownloadService.create(createImageDownloadDto)
  }
  @UseGuards(TokenGuardTsGuard)
  @Get()
  async findAll(@Query('count') count: number) {
    const allPromises = []
    const _count = count
    for (let i = 0; i < _count; i++) {
      allPromises.push(await this.imageDownloadService.findAll(count))
    }
    const res = Promise.all(allPromises)
    return res
  }
}
