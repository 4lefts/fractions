import React from 'react'

export default function BlankIcon(props){
    const { width } = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
        </svg>
    )
}