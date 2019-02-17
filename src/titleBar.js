import React from 'react'
import './titleBar-styles.css'
import './button-styles.css'

function TitleBar(props){
    const {title, operatorOptions} = props
    return(
        <header>
            <h1>{title}</h1>
            <div className="controls">
                <button 
                    className="button" 
                    onClick={props.generate}>
                    Generate
                </button>
                {
                    operatorOptions.map(choice => {
                        return (
                            <button
                                key={choice.operator}
                                className={"button " + (choice.active ? 'active' : '')}
                                onClick={() => props.toggleOperators(choice.operator)}
                            >{choice.operator}</button>
                        )
                    })
                }
            </div>
        </header>
    )
}

export {TitleBar}  