import React from 'react'

export default function Child({parentToChild}) {
    return (
        <div>
            {parentToChild}
        </div>
    )
}