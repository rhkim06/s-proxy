import { HttpService } from '@nestjs/axios'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'

class appRequest {
  constructor(
    private readonly baseUrl: string,
    private readonly httpService?: HttpService,
  ) {}
  async get(url: string) {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(this.baseUrl + url).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!'
        }),
      ),
    )
    return data
  }
}
export default new appRequest('http://45.92.158.200:8084', new HttpService())
