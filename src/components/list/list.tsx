import React from "react";
import { Header } from "../header/header";
import { PopupConnected } from "../popup/popup";
import { task } from "../../types/responseTypes";
import { actionDeleteTask } from "../../actions/actions";
import { connect } from "react-redux";
import { Button } from "../button/button";
import { History } from "history";
import classNames from "classnames";
import s from "./list.module.scss";

interface PropsType {
  history: History;
  tasks: Array<task>;
  removeTask: (id: number) => void;
}

export const List = ({
  history,
  tasks,
  removeTask
}: PropsType): JSX.Element => (
  <div>
    <Header title="Список задач">
      <PopupConnected />
    </Header>
    <ul className={s.tasksList}> 
        {tasks.map((task: task) => (
          <li key={task.id} className={s.row}>
            <p className={classNames(s.title, s.column)}>Задача № {task.id}</p>
            <p className={classNames(s.description, s.column)}>{task.title}</p>
            <p className={classNames(s.buttonBox, s.buttonColumn)}>
            <Button name="buttonEdit" onClick={() => history.push(`/${task.id}`)}/>
            <Button name="buttonRemove" onClick={() => removeTask(task.id)}/>
            </p>
            </li>
        ))}
    </ul>
  </div>
);

const mapDispatchToProps = { removeTask: actionDeleteTask };

export const ListConnected = connect(
  null,
  mapDispatchToProps
)(List);
