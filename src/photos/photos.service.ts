import { Injectable } from '@nestjs/common';
import { Photo, PhotoFilter } from './entities/photo.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PhotosService {
  constructor(private configService: ConfigService) {}
  pexel_key = this.configService.get<string>('API_KEY');
  pexel_url = 'https://api.pexels.com/v1';
  async findAll(photoFilter: PhotoFilter): Promise<Photo[]> {
    const url = encodeURI(`${this.pexel_url}/search?query=${photoFilter}`);
    const res = await fetch(url, {
      headers: {
        Authorization: this.pexel_key,
      },
    });
    const body = await res.json();
    return body.photos.map((photo) => new Photo(photo));
  }

  async findAllSecret(): Promise<Photo[]> {
    const url = encodeURI(`${this.pexel_url}/search?query=elephant`);
    const res = await fetch(url, {
      headers: {
        Authorization: this.pexel_key,
      },
    });
    const body = await res.json();
    return body.photos.map((photo) => new Photo(photo));
  }
}
