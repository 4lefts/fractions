import React from 'react'
import { Num } from './numbers'
import './question-styles.css'

function Question(props){
    const op1 = props.data.op1
    const op2 = props.data.op2
    const operator = <span>{props.data.operator}</span>
    return <li className="question">
        <Num val={op1}/> {operator} <Num val={op2}/>
    </li>
}

export { Question }
