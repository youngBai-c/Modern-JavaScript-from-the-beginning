const defaultResult = 0;
let currentResult = defaultResult;

// This is  a comment
/** 
 * This is
 * a comment
 * **/

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutpt(opeartor,resultBeforeCalc,calcNumber){
    const calcDescription =  `${resultBeforeCalc} ${opeartor} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    // 不要写重复代码
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult +=  enteredNumber
    // currentResult =  currentResult + +userInput.value;
    // outputResult(currentResult, callDescription);
    createAndWriteOutpt('+',initialResult,enteredNumber)
}

function subtract(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -=  enteredNumber
    createAndWriteOutpt('-',initialResult,enteredNumber)
}

function multiply(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber
    createAndWriteOutpt('*',initialResult,enteredNumber)
}

function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /=  enteredNumber
    createAndWriteOutpt('/',initialResult,enteredNumber)
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
displayBtn.addEventListener('click',divide);



