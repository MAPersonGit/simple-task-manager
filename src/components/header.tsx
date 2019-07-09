import React, {ReactNode} from 'react';
import { element } from 'prop-types';

interface HeaderProps {
    title: string,
    element: JSX.Element
}

export const Header:React.FC<HeaderProps> = ({title, element}:any) => {
    return (
        <header>
            <h1>{title}</h1>
            {element}
        </header>
    )
}