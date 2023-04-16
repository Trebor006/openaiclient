import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ChatsController],
  providers: [ChatsService, ConfigService],
})
export class ChatsModule {}
