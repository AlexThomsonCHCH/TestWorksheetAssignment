class Answer {
    constructor (choice, isCorrect, textDescription) {
        choice = this.choice
        isCorrect = this.isCorrect
        textDescription = this.textDescription
    }

    toString () {
        return this.choice + ' ' + this.textDescription
    }
}