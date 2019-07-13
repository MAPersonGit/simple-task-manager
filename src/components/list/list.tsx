import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../header/header";
import { DeleteButton } from "../deleteButton/deleteButton";
import { PopupConnected } from "../popup/popup";
import { taskList, task } from "../../types/responseTypes";
import { actionDeleteTask } from "../../actions/actions";
import { connect } from "react-redux";

import s from "./list.module.scss";

interface PropsType {
  tasks: Array<task>;
  removeTask: (id: number) => void;
}

export const List = ({ tasks, removeTask }: PropsType): JSX.Element => (
  <div>
    <Header title="Список задач">
      <PopupConnected />
    </Header>
    <table>
      <tbody>
        {tasks.map((task: task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>
              <DeleteButton clickHandler={removeTask} id={task.id} />
              <Link to={`/${task.id}`}>
                <button>редактировать</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const mapDispatchToProps = { removeTask: actionDeleteTask};

export const ListConnected = connect(
  null,
  mapDispatchToProps
)(List);