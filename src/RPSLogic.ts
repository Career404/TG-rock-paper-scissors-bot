export type RPS = 'rock' | 'paper' | 'scissors'
type DuelResult = 'User1' | 'User2' | 'Draw'
class BotThrow {
	hand: RPS
	constructor() {
		this.hand = <'rock' | 'paper' | 'scissors'>(
			['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
		)
	}
}
export function RPSMatch(user1: RPS, user2: RPS): DuelResult {
	if (user1 === user2) {
		return 'Draw'
	} else if (
		(user1 === 'rock' && user2 === 'scissors') ||
		(user1 === 'paper' && user2 === 'rock') ||
		(user1 === 'scissors' && user2 === 'paper')
	) {
		return 'User1'
	} else {
		return 'User2'
	}
}
export function BotMatch(userThrow) {
	let currentBotThrow: RPS = new BotThrow().hand
	let currentBotMatch = RPSMatch(userThrow, currentBotThrow)
	return currentBotMatch === 'Draw'
		? ['Draw! Try again?', currentBotThrow]
		: currentBotMatch === 'User1'
		? ['You win!', currentBotThrow]
		: ['Bot wins, sorry', currentBotThrow]
}
