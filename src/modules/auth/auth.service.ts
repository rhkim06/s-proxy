import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  async signIn(name: string, pass: string, res): Promise<any> {
    const user = await this.usersService.findOneByName(name)

    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }

    const payload = { name: user.name, pwd: user.password }
    const access_token = await this.jwtService.signAsync(payload)
    const token = `Bearer ${access_token}`
    res.setHeader('token', token)
    res.send({
      codeStatus: HttpStatus.OK,
      message: '登陆成功',
      token,
    })
  }
  testToken(req) {
    const token = req.headers.token
    return this.jwtService.verify(token)
  }
}
