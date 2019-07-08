import React from 'react';

export function Header({title, element}:any) {
    return (
        <header>
            <h1>{title}</h1>
            {element}
        </header>
    )
}