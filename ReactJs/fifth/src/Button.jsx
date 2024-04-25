import React from 'react'

export default function Button(props) {
    return (
        <button onClick={props.handler} className='btn btn-outline-primary'>
            {props.children}
        </button>
    )
}
