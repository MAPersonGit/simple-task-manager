import React from "react";
import classnames from "classnames";

import s from "./button.module.scss";

interface propTypes {
    children?: JSX.Element | string;
    name: string;
    onClick: () => void
}


export const Button = ({children, name, onClick}:propTypes):JSX.Element => (
    <button className={classnames(s.button, s[name])} onClick={onClick}>
        {children}
    </button>
)

