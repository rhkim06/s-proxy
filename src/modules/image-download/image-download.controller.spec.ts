import { Test, TestingModule } from '@nestjs/testing';
import { ImageDownloadController } from './image-download.controller';
import { ImageDownloadService } from './image-download.service';

describe('ImageDownloadController', () => {
  let controller: ImageDownloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageDownloadController],
      providers: [ImageDownloadService],
    }).compile();

    controller = module.get<ImageDownloadController>(ImageDownloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
