import React from 'react'
import SvgIcon from '../icons/svg-icon'

export default function MultiplicationOptions(props) {
    const { options, active } = props.options
    console.log(JSON.stringify(options))
    return (
        <section className={(active ? '' : 'disabled')}>
            <h3>Multiplication</h3>
            <div className="toggle-row">
                Use whole number 1?
                <button
                    disabled={!active}
                    className={"button " + (options.includeWhole1 ? 'active' : '')}
                    onClick={() => props.updateSettings({ operator: 'multiply', option: 'includeWhole1' })}>
                    {
                        options.includeWhole1
                            ? <SvgIcon name="tick" fill="white" width="100%" />
                            : <SvgIcon name="blank" width="100%" />
                    }
                </button>
            </div>
            <div className="toggle-row">
                Use fraction 1?
                <button
                    disabled={!active}
                    className={"button " + (options.includeFraction1 ? 'active' : '')}
                    onClick={() => props.updateSettings({ operator: 'multiply', option: 'includeFraction1' })}>
                    {
                        options.includeFraction1
                            ? <SvgIcon name="tick" fill="white" width="100%" />
                            : <SvgIcon name="blank" width="100%" />
                    }
                </button>
            </div>
            <div className="toggle-row">
                Use whole number 2?
                <button
                    disabled={!active}
                    className={"button " + (options.includeWhole2 ? 'active' : '')}
                    onClick={() => props.updateSettings({ operator: 'multiply', option: 'includeWhole2' })}>
                    {
                        options.includeWhole2
                            ? <SvgIcon name="tick" fill="white" width="100%" />
                            : <SvgIcon name="blank" width="100%" />
                    }
                </button>
            </div>
            <div className="toggle-row">
                Use fraction 2?
                <button
                    disabled={!active}
                    className={"button " + (options.includeFraction2 ? 'active' : '')}
                    onClick={() => props.updateSettings({ operator: 'multiply', option: 'includeFraction2' })}>
                    {
                        options.includeFraction2
                            ? <SvgIcon name="tick" fill="white" width="100%" />
                            : <SvgIcon name="blank" width="100%" />
                    }
                </button>
            </div>
        </section>
    )
}
