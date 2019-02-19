// library of functions to build the actuall question operands and operators
// extend to more than 2 operands?

// builds an array of question data from a blank array, 
function buildQuestionDataArray(len, operatorOptions) {
    // create blank array as placeholder for questions
    const blankArray = Array(len).fill(null)
    const choices = operatorOptions.filter(op => {
        return op.active
    })

    //map over blank array
    const ret = blankArray.map(() => {
        const operatorObject = chooseOperator(choices)
        if (!operatorObject) return null // i.e. if no operators are selected
        const operator = operatorObject.symbol
        let op1, op2
        switch (operatorObject.symbol.charCodeAt(0)) {
            case 43:
                ({ op1, op2 } = makeAddorMultOperands(operatorObject.options))
                break
            case 8722:
                ({ op1, op2 } = makeSubOperands(operatorObject.options))
                break
            case 215:
                ({ op1, op2 } = makeAddorMultOperands(operatorObject.options))
                break
            case 247:
                ({ op1, op2 } = makeDivOperands(operatorObject.options))
                break
            default:
                console.log('something went wrong!?')
        }
        return {
            operator,
            op1,
            op2,
        }
    })
    return ret
}

// picks a random operator from the currently selected options
function chooseOperator(choices) {
    if (choices.length === 0) return null
    const n = Math.floor(Math.random() * choices.length)
    return choices[n]
}


// builds operands for addition, based on difficulty/type
function makeAddorMultOperands(options) {
    // options:
    // whether to use mixed numbers, just whole numbers, or just fractions
    let { includeWhole1, includeFraction1, includeWhole2, includeFraction2 } = options

    // guard against both being false
    if (!includeWhole1 && !includeFraction1) includeFraction1 = true
    if (!includeWhole2 && !includeFraction2) includeFraction2 = true

    const op1 = makeRandomMixedNumber(
        includeWhole1 ? 1 : null,
        includeWhole1 ? 10 : null,
        includeFraction1 ? 1 : null,
        includeFraction1 ? 10 : null
    )
    const op2 = makeRandomMixedNumber(
        includeWhole2 ? 1 : null,
        includeWhole2 ? 10 : null,
        includeFraction2 ? 1 : null,
        includeFraction2 ? 10 : null
    )

    // ...and done
    return {
        op1,
        op2
    }
}

// builds operands for subtraction questions, based on diffculty
function makeSubOperands(options) {
    // options:
    // whether to use mixed numbers or just fractions
    // whether or not we allow the fractional part of the
    // second operand to be greater than the first
    // e.g. 2 1/4 - 1 1/3 is much harder than 2 1/3 - 1 1/4
    let { borrowing, includeWhole } = options

    const _op1 = makeRandomMixedNumber(
        includeWhole ? 1 : null,
        includeWhole ? 10 : null,
        1,
        10
    )
    const _op2 = makeRandomMixedNumber(
        includeWhole ? 1 : null,
        includeWhole ? 10 : null,
        1,
        10
    )

    // temp variables to sort numbers according to difficulty
    const { whole: _w1, numerator: _n1, denominator: _d1 } = _op1
    const { whole: _w2, numerator: _n2, denominator: _d2 } = _op2
    const _f1 = _n1 / _d1
    const _f2 = _n2 / _d2
    // if fractional part of first operand is bigger, swap them
    if (borrowing && (_f1 > _f2)) {
        // switch fractions
        _op1.numerator = _n2
        _op1.denominator = _d2
        _op2.numerator = _n1
        _op2.denominator = _d1
    }
    if (!borrowing && (_f1 < _f2)) {
        // make sure fractions are in order
        _op1.numerator = _n2
        _op1.denominator = _d2
        _op2.numerator = _n1
        _op2.denominator = _d1
    }

    if (includeWhole || borrowing) { // must have at least 1 in the first operand
        // ensure the first whole number is bigger, to allow for subtractions that 'borrow'
        if (_w1 < _w2) {
            _op1.whole = _w2
            _op2.whole = _w1
        }
        if (_w1 === _w2) {
            _op1.whole = _op1.whole + 1
        }
    }

    // ...and done
    return {
        op1: _op1,
        op2: _op2
    }
}

// builds operands for division questions
// these are always of the form fraction (or mixed number) / int
function makeDivOperands(options) {
    // options:
    // whether to use mixed numbers, or just fractions
    // for division this only applies to the first operand
    let { includeWhole } = options
    const op1 = makeRandomMixedNumber(
        includeWhole ? 1 : null,
        includeWhole ? 10 : null,
        1,
        10
    )
    const op2 = makeRandomMixedNumber(1, 10, null, null)
    return {
        op1,
        op2
    }
}

// General helper functions
//-------------------------

// makes a random mixed number with the structure:
// {
//    whole: x, (or null)
//    numerator: y, (or null)
//    denominator: z, (or null (if numator is null))  
// }
function makeRandomMixedNumber(n1, n2, n3, n4) {
    return {
        whole: makeRandomInt(n1, n2),
        ...makeRandomFraction(n3, n4)
    }
}

// makes a random fraction object
// with numerator and denominator between n1 and n2
function makeRandomFraction(n1, n2) {
    if (!(n1 && n2)) {
        return {
            numerator: null,
            denominator: null,
        }
    }
    const a = makeRandomInt(n1, n2)
    let b = makeRandomInt(n1, n2)
    while (b === a) {
        b = makeRandomInt(n1, n2)
    }
    return (
        {
            numerator: a < b ? a : b,   // make sure numerator is smaller
            denominator: a < b ? b : a, // than denominator
        }
    )
}

// makes a random int between n1 and n2
function makeRandomInt(n1, n2) {
    if (!(n1 || n2)) return null
    // make sure bounds are in the right order
    if (n1 > n2) return makeRandomInt(n2, n1)
    const diff = n2 - n1
    return Math.floor(Math.random() * diff) + n1
}

export {buildQuestionDataArray}