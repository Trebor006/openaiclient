import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { Configuration, OpenAIApi } from 'openai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChatsService {
  constructor(private configService: ConfigService) {}

  async generateRequest(createChatDto: CreateChatDto) {
    const configuration = new Configuration({
      apiKey: this.configService.get<string>('API_KEY'),
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: createChatDto.message }],
      temperature: 0.7,
    });

    const result = completion.data.choices[0].message.content;
    console.log('result from chatgpt:: ' + result);

    return result;
  }
}
