class Game {

    constructor () {
        this.answer = []
        this.logs = []
        this.newGame()
    }

    newGame () {
        this.answer.length = 0
        this.logs.length = 0
        
        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        for (let i = 0; i < 4; i++) {
            let rand = Math.floor(Math.random()*(10 - i))
            this.answer.push(arr.splice(rand, 1)[0])
        }
    }

    guess (str = '') {
        const result = Game.diff(this.answer, str.split(''))
        this.logs.push({ g: str, ...result })
        return result
    }

    static diff (answer, guess) {
        const a = guess.filter((g, idx) => answer[idx] === g).length
        const b = guess.filter((g) => answer.includes(g)).length - a
        return { a, b }
    }

}