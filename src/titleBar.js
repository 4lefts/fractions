import React from 'react'
import SettingsButton from './settingsComponents/SettingsButton'
import SvgIcon from './icons/svg-icon'

import './titleBar-styles.scss'

export default function TitleBar(props) {
    const { title, showSettings } = props
    return (
        <header>
            <div className="title-bar">
                <h1>{title}</h1>
                <section className="top-controls">
                    <button
                        className="button"
                        onClick={props.generate}>
                        <SvgIcon name={'refresh'} width={'100%'} fill={'white'} />
                    </button>
                    <button
                        className="button"
                        onClick={() => window.print()}>
                        <SvgIcon name={'print'} width={'100%'} fill={'white'} />
                    </button>
                    <SettingsButton
                        toggleSettings={props.toggleSettings}
                        showSettings={showSettings} 
                        fill={'white'}
                        width={'100%'}
                    />
                </section>
            </div>
        </header>
    )
}
