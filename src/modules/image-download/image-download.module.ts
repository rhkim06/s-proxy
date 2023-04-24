import { Module } from '@nestjs/common'
import { ImageDownloadService } from './image-download.service'
import { ImageDownloadController } from './image-download.controller'
import { JwtModule } from '@nestjs/jwt'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [JwtModule, HttpModule],
  controllers: [ImageDownloadController],
  providers: [ImageDownloadService],
})
export class ImageDownloadModule {}
