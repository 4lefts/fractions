import React from 'react'

export default function AddtionOptions(props) {
    const { options, active } = props.options
    return (
        <section>
            <h3 className={(active ? '' : 'disabled')}>Addition</h3>
            <button
                disabled={!active}
                className={"button " + (options.includeWhole1 ? 'active ' : '')}
                onClick={() => props.updateSettings({ operator: 'add', option: 'includeWhole1' })}>
                Whole Number 1?
            </button>
            <button
                disabled={!active}
                className={"button " + (options.includeWhole2 ? 'active ' : '')}
                onClick={() => props.updateSettings({ operator: 'add', option: 'includeWhole2' })}>
                Whole Number 2?
            </button>
        </section>
    )
}