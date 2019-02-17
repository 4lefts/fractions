import React, {Fragment} from 'react'
import './number-styles.css'

// build whole number part, if it exists
function WholeNumber(props){
    // console.log(JSON.stringify(props, null, 3))
    return <span>{props.val}</span>
}

// build the fractional part, if it exists
function Fraction(props){
    return (
        <span className="frac">
            <span className="numerator">{props.numerator}</span>
            <span className="vinculum">/</span>
            <span className="denominator">{props.denominator}</span>
        </span>
    )
}

// render a component of both whole and fractional parts
function Num(props){
    const w = props.val.whole ? <WholeNumber val={props.val.whole} /> : null
    const f = props.val.numerator ? <Fraction numerator={props.val.numerator} denominator={props.val.denominator} /> : null
    return <Fragment>{w}{f}</Fragment>
}

export {Num}