import React from 'react'
import './control-styles.scss'

import OperatorChoices from './settingsComponents/OperatorChoices'
import AddtionOptions from './settingsComponents/AdditionOptions'
import SubtractionOptions from './settingsComponents/SubtractionOptions'
import DivisionOptions from './settingsComponents/DivisionOptions'
import MultiplicationOptions from './settingsComponents/MultiplicationOptions'
import SettingsButton from './settingsComponents/SettingsButton'

export default function Controls(props) {
    const { operatorOptions, showSettings } = props
    return (
        <aside className={"main-controls " + (showSettings ? 'active' : 'inactive')}>
            <SettingsButton toggleSettings={props.toggleSettings} showSettings={props.showSettings} width={'100%'} fill={'grey'}/>
            <OperatorChoices operatorOptions={operatorOptions} toggleOperators={props.toggleOperators} />
            <AddtionOptions options={operatorOptions[0]} updateSettings={props.updateSettings} />
            <SubtractionOptions options={operatorOptions[1]} updateSettings={props.updateSettings} />
            <MultiplicationOptions options={operatorOptions[2]} updateSettings={props.updateSettings} />
            <DivisionOptions options={operatorOptions[3]} updateSettings={props.updateSettings} />
        </aside>
    )
}

