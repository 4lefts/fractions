import React from 'react'

export default function MultiplicationOptions(props) {
    const { options, active } = props.options
    return (
        <section>
            <h3 className={(active ? '' : 'disabled')}>Multiplication</h3>
            <button
                disabled={!active}
                className={"button " + (options.includeWhole1 ? 'active' : '')}
                onClick={() => props.updateSettings({ operator: 'multiply', option: 'includeWhole1' })}>
                Include whole 1
            </button>
            <button
                disabled={!active}
                className={"button " + (options.includeFraction1 ? 'active' : '')}
                onClick={() => props.updateSettings({ operator: 'multiply', option: 'includeFraction1' })}>
                Include fraction 1
            </button>
            <button
                disabled={!active}
                className={"button " + (options.includeWhole2 ? 'active' : '')}
                onClick={() => props.updateSettings({ operator: 'multiply', option: 'includeWhole2' })}>
                Include whole 2
            </button>
            <button
                disabled={!active}
                className={"button " + (options.includeFraction2 ? 'active' : '')}
                onClick={() => props.updateSettings({ operator: 'multiply', option: 'includeFraction2' })}>
                Include fraction 2
            </button>
        </section>
    )
}
