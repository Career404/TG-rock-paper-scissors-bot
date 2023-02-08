import { Bot, Keyboard } from 'grammy'
import { RPSMatch, BotMatch } from './RPSLogic.js'
import * as dotenv from 'dotenv'
dotenv.config()
console.log('Bot online')

const bot = new Bot(process.env.BOT_TOKEN)
const keyboard = new Keyboard().text('🗿').text('📃').text('✂️')
const helpers = {
	emojiToText: (e) => {
		return e === '🗿'
			? 'rock'
			: e === '📃'
			? 'paper'
			: e === '✂️'
			? 'scissors'
			: null
	},
	textToEmoji: (text) => {
		return text === 'rock'
			? '🗿'
			: text === 'paper'
			? '📃'
			: text === 'scissors'
			? '✂️'
			: null
	},
}

bot.command('bot', (ctx) => {
	ctx.reply('Bot-paper-scissors - go!', { reply_markup: keyboard })
})
bot.hears(/^(🗿|📃|✂️)$/, async (ctx) => {
	const newMatchResult = BotMatch(helpers.emojiToText(ctx.msg.text))
	await ctx.reply(helpers.textToEmoji(newMatchResult[1]))
	await ctx.reply(newMatchResult[0])
})

bot.start()
