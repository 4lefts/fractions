import React from 'react'

export default function SubtractionOptions(props) {
    const { options, active } = props.options
    return (
        <section>
            <h3 className={(active ? '' : 'disabled')}>Subtraction</h3>
            <button
                disabled={!active}
                className={"button " + (options.borrowing ? 'active' : '')}
                onClick={() => props.updateSettings({ operator: 'subtract', option: 'borrowing' })}>
                Borrowing?
                </button>
            <button
                disabled={!active}
                className={"button " + (options.includeWhole ? 'active' : '')}
                onClick={() => props.updateSettings({ operator: 'subtract', option: 'includeWhole' })}>
                Whole Numbers?
                </button>
        </section>
    )
}
