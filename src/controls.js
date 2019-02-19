import React from 'react'
import './control-styles.scss'
import './button-styles.scss'

function Controls(props) {
    const { operatorOptions } = props
    let showSettings = false
    return (
        <div className="controls">
            <h2>Settings</h2>
            <section>
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
                            >{choice.symbol}</button>
                        )
                    })
                }
                <button 
                    className="button"
                    onClick={() => window.print()}>
                    Print
                </button>
                <button 
                    className="button"
                    onClick={() => showSettings = !showSettings}>
                    Show Settings
                </button>
                <span>{showSettings ? 'settings showing' : 'settings hidden'}</span>
            </section>
            <section>
                <h3 className={(operatorOptions[0].active ? '' : 'disabled')}>Addition</h3>
                <button 
                    disabled={!operatorOptions[0].active}
                    className={"button " + (operatorOptions[0].options.includeWhole1 ? 'active ' : '')}  
                    onClick={() => props.updateSettings({operator: 'add', option: 'includeWhole1'})}>
                    Include whole 1
                </button>
                <button 
                    disabled={!operatorOptions[0].active}
                    className={"button " + (operatorOptions[0].options.includeFraction1 ? 'active ' : '')}  
                    onClick={() => props.updateSettings({operator: 'add', option: 'includeFraction1'})}>
                    Include fraction 1
                </button>
                <button 
                    disabled={!operatorOptions[0].active}
                    className={"button " + (operatorOptions[0].options.includeWhole2 ? 'active ' : '')}  
                    onClick={() => props.updateSettings({operator: 'add', option: 'includeWhole2'})}>
                    Include whole 2
                </button>
                <button 
                    disabled={!operatorOptions[0].active}
                    className={"button " + (operatorOptions[0].options.includeFraction2 ? 'active ' : '')}  
                    onClick={() => props.updateSettings({operator: 'add', option: 'includeFraction2'})}>
                    Include fraction 2
                </button>
            </section>
            <section>
                <h3 className={(operatorOptions[1].active ? '' : 'disabled')}>Subtraction</h3>
                <button 
                    disabled={!operatorOptions[1].active}
                    className={"button " + (operatorOptions[1].options.borrowing ? 'active' : '')}  
                    onClick={() => props.updateSettings({operator: 'subtract', option: 'borrowing'})}>
                    Borrowing
                </button>
                <button 
                    disabled={!operatorOptions[1].active}
                    className={"button " + (operatorOptions[1].options.includeWhole ? 'active' : '')}  
                    onClick={() => props.updateSettings({operator: 'subtract', option: 'includeWhole'})}>
                    Include whole
                </button>
            </section>
            <section>
                <h3 className={(operatorOptions[2].active ? '' : 'disabled')}>Multiplication</h3>
                <button 
                    disabled={!operatorOptions[2].active}
                    className={"button " + (operatorOptions[2].options.includeWhole1 ? 'active' : '')}  
                    onClick={() => props.updateSettings({operator: 'multiply', option: 'includeWhole1'})}>
                    Include whole 1
                </button>
                <button 
                    disabled={!operatorOptions[2].active}
                    className={"button " + (operatorOptions[2].options.includeFraction1 ? 'active' : '')}  
                    onClick={() => props.updateSettings({operator: 'multiply', option: 'includeFraction1'})}>
                    Include fraction 1
                </button>
                <button 
                    disabled={!operatorOptions[2].active}
                    className={"button " + (operatorOptions[2].options.includeWhole2 ? 'active' : '')}  
                    onClick={() => props.updateSettings({operator: 'multiply', option: 'includeWhole2'})}>
                    Include whole 2
                </button>
                <button 
                    disabled={!operatorOptions[2].active}
                    className={"button " + (operatorOptions[2].options.includeFraction2 ? 'active' : '')}  
                    onClick={() => props.updateSettings({operator: 'multiply', option: 'includeFraction2'})}>
                    Include fraction 2
                </button>
            </section>
            <section>
                <h3 className={(operatorOptions[3].active ? '' : 'disabled')}>Division</h3>
                <button 
                    disabled={!operatorOptions[3].active}
                    className={"button " + (operatorOptions[3].options.includeWhole ? 'active' : '')}  
                    onClick={() => props.updateSettings({operator: 'divide', option: 'includeWhole'})}>
                    Include whole
                </button>
            </section>
        </div>
    )
}

export { Controls }
/*
operatorOptions: [
        {
          operator: 'add',
          active: true,
          symbol: String.fromCharCode(43),
          options: {
            includeWhole1: true,
            includeFraction1: true,
            includeWhole2: true,
            includeFraction2: true,
          },
        },
        {
          operator: 'subtract',
          active: false,
          symbol: String.fromCharCode(8722),
          options: {
            borrowing: false,
            includeWhole: true
          }
        },
        {
          operator: 'multiply',
          active: false,
          symbol: String.fromCharCode(215),
          options: {
            includeWhole1: true,
            includeFraction1: true,
            includeWhole2: true,
            includeFraction2: true,
          },
        },
        {
          operator: 'divide',
          active: false,
          symbol: String.fromCharCode(247),
          options: {
            includeWhole: false,
          },
        }
      ],
      */