import React, { useState } from "react";
import { Link, match } from "react-router-dom";
import { task } from "../../types";
import { Header } from "../header/header";
import { DeleteButton } from "../deleteButton/deleteButton";
import { CommitTaskButton } from "../commitTaskButton/commitTaskButton";
import { connect } from "react-redux";
import { actionEditTask, actionDeleteTask } from "../../actions/actions";
import s from "./editTask.module.scss";

interface MatchParams {
  name: string;
  taskID: string;
}

interface EditTaskProps {
  match: match<MatchParams>;
  tasks: Array<task>;
  editTask: (id: number, title: string) => void;
  removeTask: (id: number) => void;
}

export const EditTask: React.FC<EditTaskProps> = ({
  tasks,
  match,
  editTask,
  removeTask
}) => {
  const { params } = match;
  const task = tasks.find(
    (task: task) => task.id === Number(params.taskID)
  ) || { title: "sample", id: 0 };
  const [formValue, setFormValue] = useState(task.title);
  const [taskChanged, setTaskChanged] = useState(false);

  function inputHandler({
    currentTarget
  }: React.FormEvent<HTMLInputElement>): void {
    const { value } = currentTarget;
    setFormValue(value);
    setTaskChanged(value !== task.title);
  }

  return (
    <div>
      <Header title={`Задача №${task.id}`}>
        <Link to="/">
          <DeleteButton clickHandler={removeTask} id={task.id} />
        </Link>
      </Header>
      <label htmlFor="taskInput">Краткое описание</label>
      <input
        id="taskInput"
        type="text"
        value={formValue}
        onChange={inputHandler}
      />

      <Link to="/">
        <CommitTaskButton
          changed={taskChanged}
          clickHandler={editTask}
          id={task.id}
          title={formValue}
        />
      </Link>
    </div>
  );
};

const mapDispatchToProps = { editTask: actionEditTask, removeTask: actionDeleteTask};

export const EditTaskConnected = connect(
  null,
  mapDispatchToProps
)(EditTask);
