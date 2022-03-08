import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth';
import { CommonModule } from './modules/common';
// import { ConfigModule, ConfigService } from './modules/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModule } from './modules/base/base.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.dev', '.env.stage', '.env.prod'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule,ConfigService],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE_NAME'),
          logging: false,
          migrations: ['/src/migrations/*{.ts,.js}'],
          entities: [__dirname + '/modules/user/entities/*.entity.{ts,js}'],
          // migrationsRun: true,
          synchronize:false,
          // cli:{
          //   entitiesDir:['src/modules/user/entities'],
          //   migrationDir:['src/migration']
          // }
          // synchronize: configService.get('DB_SYNC') === 'false',
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    ConfigModule,
    AuthModule,
    CommonModule,
    BaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
