class Question {
    constructor (qNumber, questionDescription, markWorth) {
        thisQuestionsAnswers = []
        qNumber = this.qNumber
        questionDescription = this.questionDescription
        markWorth = this.markWorth
        activeChoice = []
    }

    toString () {
        let result = ""
        result += this.qNumber + '. ' + this.questionDescription + '($this.markWorth Marks)'
        for (let anAnswer of this.thisQuestionsAnswers) {
            
			result += anAnswer.toString() + View.NEWLINE()
		}
    }

    findAnswer (targetChoice) {
        let result = this.thisQuestionsAnswers.find(anAnswer=> anAnswer.choice === targetChoice)
        return result
    }

    addAnswer (answerChoice, isCorrect, answerDescription) {
		let thisNewAnswer = new Answer(answerChoice, isCorrect, answerDescription)
		if (this.thisQuestionsAnswers.includes(thisNewAnswer) === false){
			this.thisQuestionsAnswers.push(thisNewAnswer)
			return thisNewAnswer
		}
		
    }
    
    sortAnswer () {
        this.thisQuestionsTeams.sort(function (a, b) {
            if (a.choice < b.choice) {
                return -1
            }
            if (a.choice > b.choice) {
                return 1
            }
            return 0
            })
    }

    selectAnswer () {

    }
}