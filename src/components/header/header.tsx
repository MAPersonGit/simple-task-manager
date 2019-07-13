import React from "react";

import s from './header.module.scss';

interface PropsType {
  title: string;
  children: JSX.Element;
}

export const Header = ({ title, children }: PropsType): JSX.Element => (
  <header className={s.header}>
    <h1 className={s.title}>{title}</h1>
    {children}
  </header>
);
