const operandElements = document.querySelectorAll('input');
const operators = document.querySelectorAll('button');
const result = document.querySelector('.result');
const errorMarks = document.querySelectorAll('.errorMarks');

operandElements.forEach(element => {
    element.required = true
});

operators.forEach(button => {
    button.onclick = () => {
        let dataIsValid = [true, true]
        let operands = [];
        operandElements.forEach(item => {
            operands.push(parseInt(item.value, 10))
        });

        operands.forEach(function (item, index, array) {
            if (isNaN(item)) {
                errorMarks[index].style.display = 'inline';
                dataIsValid[index] = false;
            } else {
                errorMarks[index].style.display = 'none';
                dataIsValid[index] = true;
            }
        })

        if (dataIsValid[0] === true && dataIsValid[1] === true) {
            switch (button.dataset.operator) {
                case 'plus':
                    result.textContent = `${operands[0]} ➕ ${operands[1]} = ${operands[0] + operands[1]}`;
                    break;
                case 'minus':
                    result.textContent = `${operands[0]} ➖ ${operands[1]} = ${operands[0] - operands[1]}`;
                    break;
                case 'times':
                    result.textContent = `${operands[0]} ✖️ ${operands[1]} = ${operands[0] * operands[1]}`;
                    break;
                case 'divide':
                    if (operands[1] === 0) {
                        errorMarks[1].style.display = 'inline';
                        dataIsValid[1] = false;
                        break;      
                    } else {
                        result.textContent = `${operands[0]} ➗ ${operands[1]} = ${(operands[0] / operands[1]).toFixed(2)}`;
                        break;    
                    }
            }
        }
    }
});