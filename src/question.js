import React from 'react'
import MixedNumber from './numbers'
import './question-styles.scss'

export default function Question(props){
    const {op1, op2, operator} = props.data
    return <div className="question">
        <span className="question-number">{props.qNumber}. </span>
        <MixedNumber val={op1}/>
        <span className="operator">{operator}</span>
        <MixedNumber val={op2}/>
        <span className="answer-box">=</span>
    </div>
}
