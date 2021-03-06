module.exports = function (playerAction) {
    let computerAction
    let random = Math.random() * 3
    if (random < 1) {
        computerAction = 'rock'
    } else if (random > 2) {
        computerAction = 'scissor'
    } else {
        computerAction = 'paper'
    }

    if (computerAction === playerAction) {
        return 0
    } else if (
        (computerAction === 'rock' && playerAction === 'paper') ||
        (computerAction === 'scissor' && playerAction === 'rock') ||
        (computerAction === 'paper' && playerAction === 'scissor')
    ) {
        return -1
    } else {
        return 1
    }
}