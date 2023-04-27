import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { ROLES_KEY } from 'src/decorator/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { jwtConstants } from 'src/modules/auth/constants'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    if (!requiredRoles) {
      return true
    }
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)
    const payload = await this.jwtService.verifyAsync(token, {
      secret: jwtConstants.secret,
    })

    return requiredRoles.some((role) => payload.roles?.includes(role))
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
