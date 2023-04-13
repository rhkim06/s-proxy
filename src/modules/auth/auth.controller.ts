import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common'
import { TokenGuardTsGuard } from 'src/guard/token.guard.ts/token.guard.ts.guard'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto, @Response() res) {
    return this.authService.signIn(signInDto.name, signInDto.password, res)
  }

  @UseGuards(TokenGuardTsGuard)
  @HttpCode(HttpStatus.OK)
  @Get('check-token')
  checkToken(@Request() req) {
    return {
      data: req.user,
      message: 'token verified',
    }
  }
}
