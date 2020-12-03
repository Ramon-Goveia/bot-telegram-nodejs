const TelegramBot = require('node-telegram-bot-api')

 
// substitua o valor abaixo pelo token de telegrama que você recebe de @BotFather
const token = '1468331741:AAFqmDuh6fVArg_M3I3NIB0M7FetIZYdBOw';
 
// Crie um bot que usa 'polling' para buscar novas atualizações
const bot = new TelegramBot(token, {polling: true});
 
// Corresponde a "/ echo [qualquer]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' é a mensagem recebida do telegrama
   // 'match' é o resultado da execução do regexp acima no conteúdo do texto
   // da mensagem
 
  const chatId = msg.chat.id;
  const resp = match[1]; //"qualquer coisa" capturado
 
  // enviar de volta o "qualquer coisa" correspondente para o bate-papo
  bot.sendMessage(chatId, resp);
});
 
// Ouça qualquer tipo de mensagem. Existem diferentes tipos de
// mensagens.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  console.log(msg.text);
  // envia uma mensagem para o chat confirmando o recebimento da mensagem
  bot.sendMessage(chatId, 'Olá, Qual o seu nome?');
  
});