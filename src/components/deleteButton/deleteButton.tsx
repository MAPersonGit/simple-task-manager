import React from "react";

import s from './deleteButton.module.scss';

interface PropsType {
  clickHandler: (id: number) => void;
  id: number;
}

export const DeleteButton = ({ clickHandler, id }: PropsType): JSX.Element => {
  const handleClick = ({target}: any): void => {
    clickHandler(target.dataset.id);
  };

  return (
    <button data-id={id} onClick={handleClick}>
      удалить
    </button>
  );
}
