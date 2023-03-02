export type PhotoFilter = undefined | 'cat' | 'dog' | 'dog cat';
export class Photo {
  url: string;
  alt: string;
  photographer: string;
  photographer_url: string;
  src: PhotoSrc;
  constructor(data: any) {
    this.url = data.url;
    this.photographer = data.photographer;
    this.photographer_url = data.photographer_url;
    this.src = new PhotoSrc(data.src);
    this.alt = data.alt;
  }
}

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
