import React from "react";

import s from "./commitTaskButton.module.scss";

interface PropsType {
  changed: boolean;
  clickHandler: (id: number, title: string) => void;
  id: number;
  title: string;
}

export const CommitTaskButton = ({
  changed,
  clickHandler,
  id,
  title
}: PropsType): JSX.Element => {
  if (changed)
    return <button onClick={() => clickHandler(id, title)}>Сохранить</button>;

  return <button>Вернуться к списку</button>;
};
