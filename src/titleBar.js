import React from 'react'
import SettingsButton from './settingsComponents/SettingsButton'

import refreshIcon from './icons/refresh-icon.svg'
import printIcon from './icons/print-icon.svg'
import './titleBar-styles.scss'

export default function TitleBar(props) {
    const { title, showSettings } = props
    return (
        <header>
            <h1>{title}</h1>
            <section className="top-controls">
                <button
                    className="button"
                    onClick={props.generate}>
                    <img src={refreshIcon} alt="refresh questions button icon" />
                </button>
                <button
                    className="button"
                    onClick={() => window.print()}>
                    <img src={printIcon} alt="print button icon" />
                </button>
                <SettingsButton
                    toggleSettings={props.toggleSettings}
                    showSettings={showSettings} 
                />
            </section>
        </header>
    )
}
