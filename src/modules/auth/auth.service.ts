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
    } else {
      const payload = { id: user.id }
      const access_token = await this.jwtService.signAsync(payload, {
        secret: 'abcabc',
      })
      const token = `Bearer ${access_token}`
      res.setHeader('authorization', token)
      res.send({
        codeStatus: HttpStatus.OK,
        message: '登陆成功',
        data: {
          id: user.id,
        },
      })
    }
  }
  getUserIdByName(token: string) {
    const _token = token.split('Bearer ')[1]
    const res = this.jwtService.verify(_token)
    return this.usersService.findOneByName(res.name)
  }
}
