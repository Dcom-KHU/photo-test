import { Module } from '@nestjs/common';
import { PhotosModule } from './photos/photos.module';
import { ConfigModule } from '@nestjs/config';
import { setEnvironment } from './env/setupEnv';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: setEnvironment(),
    }),
    AuthModule,
    PhotosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
