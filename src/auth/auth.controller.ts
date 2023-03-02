import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotAcceptableException,
  UseGuards,
  Req,
} from '@nestjs/common';

import {
  ApiNotAcceptableResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { User } from './entities/auth.entity';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'mockup login',
  })
  @Post('/login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }
}
