import { ApiProperty } from '@nestjs/swagger';

export type PhotoFilter = undefined | 'cat' | 'dog' | 'dog cat';

export class PhotoSrc {
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg',
  })
  original: string;
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg',
  })
  large2x: string;
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg',
  })
  large: string;
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg',
  })
  medium: string;
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg',
  })
  small: string;
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg',
  })
  portrait: string;
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg',
  })
  landscape: string;
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg',
  })
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
    example:
      'https://www.pexels.com/photo/photo-of-people-holding-siamese-cat-and-chihuahua-1909802/',
    description: '사진 웹사이트 경로',
  })
  url: string;
  @ApiProperty({
    example: 'Photo of People Holding Siamese Cat and Chihuahua',
    description: 'alt 문구',
  })
  alt: string;
  @ApiProperty({
    example: 'Alexander Grey',
    description: '사진 작가 이름',
  })
  photographer: string;
  @ApiProperty({
    example: 'https://www.pexels.com/@mccutcheon',
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
