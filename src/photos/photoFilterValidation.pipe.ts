import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  NotAcceptableException,
} from '@nestjs/common';
import { PhotoFilter } from './entities/photo.entity';

@Injectable()
export class PhotoFilterValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): PhotoFilter {
    console.log(value);
    if (typeof value === 'undefined') {
      return 'dog cat';
    } else if (typeof value !== 'string') {
      throw new NotAcceptableException('잘못된 필터 타입입니다.');
    }
    if (value === 'dog' || value === 'cat') {
      return value;
    }
    throw new NotAcceptableException('잘못된 필터 타입입니다.');
  }
}
