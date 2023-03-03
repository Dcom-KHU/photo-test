import { ApiProperty } from '@nestjs/swagger';

export type PhotoFilter = undefined | 'cat' | 'dog' | 'dog cat';

export class PhotoSrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
  constructor(data: any) {
    this.original = data.original;
    this.large2x = data.large2x;
    this.large = data.large;
    this.medium = data.medium;
    this.small = data.small;
    this.portrait = data.portrait;
    this.landscape = data.landscape;
    this.tiny = data.tiny;
  }
}

export class Photo {
  @ApiProperty({
    description: '사진 웹사이트 경로',
  })
  url: string;
  @ApiProperty({
    description: 'alt 문구',
  })
  alt: string;
  @ApiProperty({
    description: '사진 작가 이름',
  })
  photographer: string;
  @ApiProperty({
    description: '사진 작가 프로필 경로',
  })
  photographer_url: string;
  @ApiProperty({
    description: '사진 소스',
  })
  src: PhotoSrc;
  constructor(data: any) {
    this.url = data.url;
    this.photographer = data.photographer;
    this.photographer_url = data.photographer_url;
    this.src = new PhotoSrc(data.src);
    this.alt = data.alt;
  }
}
