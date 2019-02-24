import React from 'react'
import SvgIcon from '../icons/svg-icon'

export default function AddtionOptions(props) {
    const { options, active } = props.options
    return (
        <section className={(active ? '' : 'disabled')}>
            <h3>Addition</h3>
            <div className="toggle-row">
                Use whole number 1?
                <button
                    disabled={!active}
                    className={"button " + (options.includeWhole1 ? 'active ' : '')}
                    onClick={() => props.updateSettings({ operator: 'add', option: 'includeWhole1' })}>
                    {
                        options.includeWhole1
                            ? <SvgIcon name="tick" fill="white" width="100%" />
                            : <SvgIcon name="blank" width="100%" />
                    }
                </button>
            </div>
            <div className="toggle-row">
                Use whole number 2?
                <button
                    disabled={!active}
                    className={"button " + (options.includeWhole2 ? 'active ' : '')}
                    onClick={() => props.updateSettings({ operator: 'add', option: 'includeWhole2' })}>
                    {
                        options.includeWhole2
                            ? <SvgIcon name="tick" fill="white" width="100%" />
                            : <SvgIcon name="blank" width="100%" />
                    }
                </button>
            </div>
        </section>
    )
}