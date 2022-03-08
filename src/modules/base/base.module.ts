import { Module } from '@nestjs/common';
import { BaseService } from './base.service';
import { BaseController } from './base.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { BaseRepository } from './base.repository';

@Module({
  // imports: [TypeOrmModule.forFeature([BaseRepository])],
  controllers: [BaseController],
  providers: [BaseService]
})
export class BaseModule {}
