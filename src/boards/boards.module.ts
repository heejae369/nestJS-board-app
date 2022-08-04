import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardRepository]) // BoardRepository를 다른 클래스에서 import할 수 있게 여기 모듈의 imports에 등록함
  ],

  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
