import React from 'react'
import MixedNumber from './numbers'
import './question-styles.scss'

export default function Question(props){
    const {op1, op2, operator} = props.data
    return <li className="question">
        <MixedNumber val={op1}/>
        <span className="operator">{operator}</span>
        <MixedNumber val={op2}/>
    </li>
}
