// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
//module.exports = { sum };


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we include fromEuroToDollar here as well because it needs to be exported
//module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInDollar2){
    let valueInEuro2 = valueInDollar2 / 1.2;
    let valueInYen = valueInEuro2 * 127.9;
    return valueInYen;
}

const fromYenToPound = function(ValueInYen2){
    let valueInEuro3 = ValueInYen2 / 127.9;
    let ValueInPound = valueInEuro3 * 0.8;
    return ValueInPound;
}
    module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }
