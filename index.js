import { ApukoneClient } from '@apukone/client';
import ollama from 'ollama';
import 'dotenv/config';

const processMessage = async (data) => {
  const response = await ollama.chat({ model: process.env.OLLAMA_MODEL, messages: data });
  return {
    ...response.message,
    eval_count: response.eval_count
  };
};

ApukoneClient({ host: process.env.HOST, token: process.env.TOKEN, onMessage: processMessage });