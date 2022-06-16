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

const calculator = new Calculator(previousOpendTextElement. currentOperandTextElement)

clear() ;{
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }



  del() ;{
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
 
deleteButton.addEventListener('click', button  => {
    Calculator.del()
    Calculator.updateDisplay()

})

appendNumber(number) ;{
    if (!(number === '.' && this.currentOperand.includes('.')))
    {   
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
}

chooseOperation(operation); {
     if  (this.operation === '') this.operation = operation;
     if (this.previousOperand !== '') {
        this.compute()
     }
}

compute(); {
    let computation 
    const prev = parseFloat(this.prevousOperand)
    const current = parseFloat(this.currentOperand)
    if (!(isNaN(prev) || isNaN(current))) {
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
        }
    }
    this.currentOperand = computation
    this.operation = undefined
    this.prevousOperand = ''

}


updateDisplay(); {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
        this.previousOpendTextElement.innerText = '$(this.getDisplayNumber(this.previousOperand)) ${this.operation}'

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

equalsButton.addEventListener('click', button => {
    Calculator.compute()
    Calculator.updateDisplay()
})


allClearButton.addEventListener('click', button => {
    Calculator.clear()
    Calculator.updateDisplay()
})

getDisplayNumber (number); {
    const stringNumber = number.toString()
    const intergerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let intergerDisplay 
    if (isNaN(intergerDigits)) {
        intergerDisplay = ''

    } else { 
        intergerDisplay = intergerDigits.toLocaleString('en', {maxiumFractionDigits: 0})
}


}
if (decimalDigits !=null) {
    return '${intgerDisplay}.${decimalDigits}'
}
else {
    return intergerDisplay
}
