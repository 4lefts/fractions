import React from 'react'
import settingsIcon from '../icons/settings-icon.svg'
import closeIcon from '../icons/close-icon.svg'

export default function SettingsButton(props) {
    return (
        <button
            className="button"
            onClick={props.toggleSettings}>
            {props.showSettings ?
                <img src={closeIcon} alt="close settings button icon" /> :
                <img src={settingsIcon} alt="close settings button icon" />
            }
        </button>
    )
}