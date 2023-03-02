import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessToken, User } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  login(user: User): AccessToken {
    const payload = {
      username: user.username,
      sub: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
