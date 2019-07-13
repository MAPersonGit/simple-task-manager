import React from "react";
import { Header } from "../header/header";
import { DeleteButton } from "../deleteButton/deleteButton";
import { PopupConnected } from "../popup/popup";
import { taskList, task } from "../../types/responseTypes";
import { actionDeleteTask } from "../../actions/actions";
import { connect } from "react-redux";
import { Button } from "../button/button";
import { History } from "history";
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
    <table>
      <tbody>
        {tasks.map((task: task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>
              <Button name="red" onClick={() => removeTask(task.id)}>
                удалить
              </Button>
              <Button name="green" onClick={() => history.push(`/${task.id}`)}>
                редактировать
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const mapDispatchToProps = { removeTask: actionDeleteTask };

export const ListConnected = connect(
  null,
  mapDispatchToProps
)(List);
