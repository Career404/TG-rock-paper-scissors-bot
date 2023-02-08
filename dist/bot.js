import { Markup, Telegraf } from 'telegraf';
import { BotMatch } from './RPSLogic.js';
import * as dotenv from 'dotenv';
dotenv.config();
console.log('Bot online');
const bot = new Telegraf(process.env.BOT_TOKEN);
const keyboard = Markup.keyboard([['🗿'], ['📃'], ['✂️']]);
const helpers = {
    emojiToText: (e) => {
        return e === '🗿'
            ? 'rock'
            : e === '📃'
                ? 'paper'
                : e === '✂️'
                    ? 'scissors'
                    : null;
    },
    textToEmoji: (text) => {
        return text === 'rock'
            ? '🗿'
            : text === 'paper'
                ? '📃'
                : text === 'scissors'
                    ? '✂️'
                    : null;
    },
};
bot.command('bot', async (ctx, next) => {
    ctx.reply('Bot-paper-scissors - go!', keyboard);
    await next();
});
bot.hears(/^(🗿|📃|✂️)$/, async (ctx) => {
    const newMatchResult = BotMatch(helpers.emojiToText(ctx.message.text));
    await ctx.reply(helpers.textToEmoji(newMatchResult[1]));
    await ctx.reply(newMatchResult[0]);
});
bot.launch();
//# sourceMappingURL=bot.js.map