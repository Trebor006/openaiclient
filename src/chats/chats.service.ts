import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ChatsService {
  async generateRequest(createChatDto: CreateChatDto) {
    const configuration = new Configuration({
      apiKey: 'YOUR API KEY', // Eulate Arg
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
