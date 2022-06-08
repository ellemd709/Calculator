class Calculator {
    constructor(previousOpendTextElement, currentOperandTextElement) {
    this.previousOpendTextElement = previousOpendTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.allClearButton()}
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOpendTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const Calculator = new Calculator(previousOpendTextElement. currentOperandTextElement)

clear() {
    this.currentOperand =''
    this.prevousOperand =''
    this.operation = undefined

}

delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)

}
 
deleteButton.addEventListener('click', button  => {
    Calculator.delete()
    Calculator.updateDisplay()

})

appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()}

chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.prevousOperand !== '') {
        this.compute()
}

compute() {
    let computation 
    const prev = parseFloat(this.prevousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN (current)) return
    switch (this.operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
            break
        default:
            return
}
    this.currentOperand = computation
    this.operation = undefined
    this.prevousOperand = ''

}


updateDisplay() {
    this.currentOperandTextElement.innerText = 
    this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
    this.previousOpendTextElement.innerText = 
    '${this.getDisplayNumber(this.previousOperand)} ${this.operation}'
    } else {
        this.previousOpendTextElement.innerText = ''
    }
  }

}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()

    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        Calculator. chooseOperation(button.innerText)
        Calculator.updateDisplay()

})
})

equalsButton.addEventListener('cli(ck', button => {
    Calculator.compute()
    Calculator.updateDisplay()
})


allClearButton.addEventListener('click', button => {
    Calculator.clear()
    Calculator.updateDisplay()
})

getDisplayNumber (number) {
    const stringNumber = number.toString()
    const innerDigits = parseFloat(stringNumber.split('.') [0])
    const decimalDigits = stringNumber.split('.')[1]
    let intergerDisplay 
    if (isNaN(intergerDigits)) {
        intergerDisplay = ''

    } else { 
        intergerDisplay = intergerDigits.toLocaleString('en', {maxiumFractionDigits: 0})
}

    if (decimalDigits !=null) {
        return '${intgerDisplay}.${decimalDigits}'
    }
    else {
        return intergerDisplay
    }
}
