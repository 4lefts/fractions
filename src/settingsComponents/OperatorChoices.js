import React from 'react'

export default function OperatorChoices(props) {
    const { operatorOptions } = props
    return (
        <section>
            <h3>Operators</h3>
            <div className="toggle-row operators">
            {
                operatorOptions.map(choice => {
                    return (
                        <button
                            key={choice.operator}
                            className={"button " + (choice.active ? 'active' : '')}
                            onClick={() => props.toggleOperators(choice.operator)}>
                            {choice.symbol}
                        </button>
                    )
                })
            }
            </div>
        </section>
    )
}