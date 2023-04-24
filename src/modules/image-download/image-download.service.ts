import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'

@Injectable()
export class ImageDownloadService {
  constructor(private readonly httpService: HttpService) {}
  create(createImageDownloadDto) {
    return 'This action adds a new imageDownload'
  }

  async findAll(count: number) {
    const { data } = await firstValueFrom(
      this.httpService
        .get<any>('http://45.92.158.200:8084/displayImage/1')
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!'
          }),
        ),
    )
    return data
  }
}
