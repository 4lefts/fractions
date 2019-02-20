import React from 'react'
import './control-styles.scss'
import './button-styles.scss'
import OperatorChoices from './settingsComponents/OperatorChoices'
import AddtionOptions from './settingsComponents/AdditionOptions'
import SubtractionOptions from './settingsComponents/SubtractionOptions'
import DivisionOptions from './settingsComponents/DivisionOptions'
import MultiplicationOptions from './settingsComponents/MultiplicationOptions'

export default class Controls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSettings: false,
        }
    }
    render() {
        const { operatorOptions } = this.props
        return (
            <div>
                <section className="controls">
                    <button
                        className="button"
                        onClick={this.props.generate}>
                        Generate
                   </button>
                    <button
                        className="button"
                        onClick={() => window.print()}>
                        Print
                    </button>
                    <button
                        className="button"
                        onClick={() => this.setState({ showSettings: true })}>
                        Show Settings
                    </button>
                    <span>{this.state.showSettings ? 'settings showing' : 'settings hidden'}</span>
                </section>
                <aside>
                    <button
                        className="button"
                        onClick={() => this.setState({ showSettings: false })}>
                        Close
                    </button>
                    <OperatorChoices operatorOptions={operatorOptions} toggleOperators={this.props.toggleOperators} />
                    <AddtionOptions options={operatorOptions[0]} updateSettings={this.props.updateSettings} />
                    <SubtractionOptions options={operatorOptions[1]} updateSettings={this.props.updateSettings} />
                    <MultiplicationOptions options={operatorOptions[2]} updateSettings={this.props.updateSettings} />
                    <DivisionOptions options={operatorOptions[3]} updateSettings={this.props.updateSettings} />
                </aside>
            </div>
        )
    }
}
