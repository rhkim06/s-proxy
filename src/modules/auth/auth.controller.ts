import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common'
import { userInfo } from 'os'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'
import { Logger } from 'winston'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto, @Response() res) {
    return this.authService.signIn(signInDto.id, signInDto.password, res)
  }

  @UseGuards(TokenGuardTsGuard)
  @HttpCode(HttpStatus.OK)
  @Get('check-token')
  checkToken(@Request() req) {
    return {
      data: {
        user: {
          id: req.user,
        },
      },
      message: 'token verified',
    }
  }
}
