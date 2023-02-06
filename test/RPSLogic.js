class BotThrow {
	constructor() {
		this.hand = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
	}
}
function RPSMatch(user1, user2) {
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
function BotMatch(userThrow) {
	console.log('Bot THrow')
	let currentBotThrow = new BotThrow().hand
	let currentBotMatch = RPSMatch(userThrow, currentBotThrow)
	return currentBotMatch === 'Draw'
		? 'Draw! Try again?'
		: currentBotMatch === 'User1'
		? 'You win!'
		: 'Bot wins, sorry'
}
const rockUserInput = {
	target: document.getElementById('rock'),
	value: 'rock',
}
const paperUserInput = {
	target: document.getElementById('paper'),
	value: 'paper',
}
const scissorsUserInput = {
	target: document.getElementById('scissors'),
	value: 'scissors',
}
const arr = [rockUserInput, paperUserInput, scissorsUserInput]
arr.forEach((input) => {
	input.target.addEventListener('click', (event) => {
		const result = BotMatch(input.value)
		const newDiv = document.createElement('div')
		newDiv.className = 'result'
		newDiv.innerHTML = result
		document.body.appendChild(newDiv)
	})
})
//# sourceMappingURL=RPSLogic.js.map
