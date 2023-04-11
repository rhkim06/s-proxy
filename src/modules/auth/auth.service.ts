import {
  Get,
  Injectable,
  Response,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  async signIn(name: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByName(name)
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }
    const payload = { name: user.name, pwd: user.password }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
  getToken(res) {
    res.setHeader(
      'token',
      this.jwtService.sign({
        id: 'dadscxciweneiu122',
        name: '金毛',
      }),
    )
    res.send()
  }
  testToken(req) {
    const token = req.headers.token
    return this.jwtService.verify(token)
  }
}
