import React from 'react'

export default function DivisionOptions(props) {
    const { options, active } = props.options
    return (
        <section>
            <h3 className={(active ? '' : 'disabled')}>Division</h3>
            <button
                disabled={!active}
                className={"button " + (options.includeWhole ? 'active' : '')}
                onClick={() => props.updateSettings({ operator: 'divide', option: 'includeWhole' })}>
                Whole Number?
            </button>
        </section>
    )
}