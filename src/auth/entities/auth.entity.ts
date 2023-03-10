import { ApiProperty } from '@nestjs/swagger';

export class AccessToken {
  @ApiProperty({
    default: '엄청 긴 문자열',
    description: '액세스 토큰. 만료 기간은 30분',
  })
  access_token: string;
}

export class User {
  @ApiProperty({
    default: 'a@a.com',
    description: '로그인 테스트용 이메일. 아무 이메일이나 OK',
  })
  email: string;
  @ApiProperty({
    default: 'test',
    description: '로그인 테스트용 유저 이름. 아무 유저 이름이나 OK',
  })
  username: string;
}
