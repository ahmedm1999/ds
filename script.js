// All HTML Element 

const screen = document.getElementById("pass-screen") ;
const upperEl = document.getElementById("upper") ;
const lowerEl = document.getElementById("lower") ;
const numberEl = document.getElementById("number") ;
const symbolEl = document.getElementById("symbol") ;
const btn = document.getElementById("btn") ;
let slider = document.getElementById("slider") ;
let length__title = document.querySelector(".length__title");
length__title.innerHTML = `length : ${slider.value}`  ;
let passLength = +slider.value ;
slider.addEventListener('input', () => {
    passLength = +slider.value ;
    length__title.innerHTML = `length : ${passLength}` ;
}) ;
// Generate Functions 
const generateLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} ;

const generateUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} ;
const generateNumber = () => {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} ;

const generateSymbol = () => {
    const symbols = '!@#$'
	return symbols[Math.floor(Math.random() * symbols.length)];
} ;
// make an Object 
const randomFunc = {
    lower: generateLower,
    upper: generateUpper,
    number: generateNumber,
    symbol: generateSymbol
} ;
btn.addEventListener('click', () => {
    const hasLower = lowerEl.checked ;
    const hasUpper = upperEl.checked ;
    const hasNumber = numberEl.checked ;
    const hasSymbol = symbolEl.checked ;
    console.log(passLength) ;
    screen.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, passLength) ;
}) ;
const generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = '' ;
    const typesCount = lower + upper + number + symbol ; 
    if(typesCount === 0) {
        return '' ;
    }
    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]) ;
    let i = 0 ;
    for(i ; i < length ; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]() ;
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
};