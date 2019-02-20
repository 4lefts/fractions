import React from 'react'
import './titleBar-styles.scss'

export default function TitleBar(props) {
    const { title, description } = props
    return (
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}
  