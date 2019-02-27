import React from 'react'
import SvgIcon from '../icons/svg-icon'

export default function SubtractionOptions(props) {
    const { options, active } = props.options
    return (
        <section className={(active ? '' : 'disabled')}>
            <h3>Subtraction</h3>
            <div className="toggle-row">
                Inlcude "borrowing"?
                <button
                    disabled={!active}
                    className={"button " + (options.borrowing ? 'active' : '')}
                    onClick={() => props.updateSettings({ operator: 'subtract', option: 'borrowing' })}>
                    {
                        options.borrowing
                            ? <SvgIcon name="tick" fill="white" width="100%" />
                            : <SvgIcon name="blank" width="100%" />
                    }
                </button>
            </div>
            <div className="toggle-row">
                Use whole numbers?
                <button
                    disabled={!active}
                    className={"button " + (options.includeWhole ? 'active' : '')}
                    onClick={() => props.updateSettings({ operator: 'subtract', option: 'includeWhole' })}>
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
