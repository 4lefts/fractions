import React from 'react'

import TickIcon from './tick-icon'
import SettingsIcon from './settings-icon'
import RefreshIcon from './refresh-icon'
import PrintIcon from './print-icon'
import BlankIcon from './blank-icon';
import CloseIcon from './close-icon';

const SvgIcon = props => {
    const { name, fill, width } = props
    switch (name) {
        case 'tick':
            return <TickIcon fill={fill} width={width} />
        case 'settings':
            return <SettingsIcon fill={fill} width={width} />
        case 'refresh':
            return <RefreshIcon fill={fill} width={width} />
        case 'print':
            return <PrintIcon fill={fill} width={width} />
        case 'close':
            return <CloseIcon fill={fill} width={width} />
        case 'blank':
        default:
            return <BlankIcon width={width} />
    }
}

export default SvgIcon