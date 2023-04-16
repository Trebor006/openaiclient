import { Body, Controller, Post } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  async create(@Body() createChatDto: CreateChatDto) {
    console.log('backend invocado!!!');
    const response = await this.chatsService.generateRequest(createChatDto);
    return response.toString();
  }
}
