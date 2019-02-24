import React from 'react'
import SvgIcon from '../icons/svg-icon'

export default function SettingsButton(props) {
    return (
        <button
            className="button"
            onClick={props.toggleSettings}>
            {props.showSettings ?
                <SvgIcon name={'close'} width={props.width} fill={props.fill} /> :
                <SvgIcon name={'settings'} width={props.width} fill={props.fill} />
            }
        </button>
    )
}