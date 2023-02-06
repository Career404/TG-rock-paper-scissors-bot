import { Bot, Keyboard } from 'grammy';
import { BotMatch } from './RPSLogic.js';
import { BOT_TOKEN } from './secret.js';
console.log('Bot online');
const bot = new Bot(BOT_TOKEN);
const keyboard = new Keyboard().text('🗿').text('📃').text('✂️');
function emojiToText(e) {
    return e === '🗿'
        ? 'rock'
        : e === '📃'
            ? 'paper'
            : e === '✂️'
                ? 'scissors'
                : null;
}
function textToEmoji(text) {
    return text === 'rock'
        ? '🗿'
        : text === 'paper'
            ? '📃'
            : text === 'scissors'
                ? '✂️'
                : null;
}
bot.command('bot', (ctx) => {
    ctx.reply('Bot-paper-scissors - go!', { reply_markup: keyboard });
});
bot.hears(/^(🗿|📃|✂️)$/, (ctx) => {
    const newMatchResult = BotMatch(emojiToText(ctx.msg.text));
    ctx.reply(textToEmoji(newMatchResult[1]));
    ctx.reply(newMatchResult[0]);
});
bot.start();
//# sourceMappingURL=bot.js.map