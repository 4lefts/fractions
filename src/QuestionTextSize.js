import React from 'react'
import './QuestionTextSize-styles.scss'

export default function QuestionTextSize(props) {
    return (
        <div className="slider-container">
            <label>
                Question Text Size:
                <input
                    type="range"
                    min="2"
                    max="7"
                    onChange={props.onChange}
                    value={props.questionTextSize}
                    step="0.01" />
            </label>
        </div>
    )
}