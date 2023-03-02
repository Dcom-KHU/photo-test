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
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo, PhotoFilter } from './entities/photo.entity';
import { PhotoFilterValidationPipe } from './photoFilterValidation.pipe';
import {
  ApiBearerAuth,
  ApiNotAcceptableResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Photos')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @ApiOperation({
    summary: 'Find photos',
  })
  @ApiImplicitQuery({
    required: false,
    name: 'filter',
    type: String,
    description: 'cat | dog | undefined 중에 하나',
  })
  @ApiNotAcceptableResponse({
    description: '올바르지 않은 필터인 경우',
    type: NotAcceptableException,
  })
  @Get()
  async findAll(
    @Query('filter', new PhotoFilterValidationPipe()) photoFilter: PhotoFilter,
  ): Promise<Photo[]> {
    return await this.photosService.findAll(photoFilter);
  }

  @ApiOperation({
    summary:
      'Find secret photos /auth/login에서 발급받은 토큰을 헤더에 Bearer 방식으로 넣어줘야 합니다.',
  })
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get('secret')
  async findAllSecret(): Promise<Photo[]> {
    return await this.photosService.findAllSecret();
  }
}
