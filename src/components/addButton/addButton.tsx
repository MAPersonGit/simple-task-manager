import React from "react";

import s from './addButton.module.scss';

export function addButton({ clickHandler }: any) {
  const handleClick = (e: any): void => {
    clickHandler(true);
  };

  return <button onClick={handleClick}>добавить</button>;
}
