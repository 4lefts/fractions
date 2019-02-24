import React from 'react'
import SvgIcon from '../icons/svg-icon'

export default function DivisionOptions(props) {
    const { options, active } = props.options
    return (
        <section className={(active ? '' : 'disabled')}>
            <h3>Division</h3>
            <div className="toggle-row">
                Whole Number?
                <button
                    disabled={!active}
                    className={"button " + (options.includeWhole ? 'active' : '')}
                    onClick={() => props.updateSettings({ operator: 'divide', option: 'includeWhole' })}>
                    {
                        options.includeWhole
                            ? <SvgIcon name="tick" fill="white" width="100%" />
                            : <SvgIcon name="blank" width="100%" />
                    }
                </button>
            </div>
        </section>
    )
}