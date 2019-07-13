import React, { useState } from "react";
import { Link, match } from "react-router-dom";
import { task } from "../../types";
import { Header } from "../header/header";
import { DeleteButton } from "../deleteButton/deleteButton";
import { CommitTaskButton } from "../commitTaskButton/commitTaskButton";
import { connect } from "react-redux";
import { actionEditTask, actionDeleteTask } from "../../actions/actions";
import { Button } from "../button/button";
import { History } from "history";
import s from "./editTask.module.scss";

interface MatchParams {
  name: string;
  taskID: string;
}

interface EditTaskProps {
  match: match<MatchParams>;
  history: History;
  tasks: Array<task>;
  editTask: (id: number, title: string) => void;
  removeTask: (id: number) => void;
}

export const EditTask: React.FC<EditTaskProps> = ({
  tasks,
  match,
  history,
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

  function deleteTaskHandler(id: number) {
    removeTask(id);
    history.push("/");
  }

  function clickHandler() {
    if (taskChanged) {
      editTask(task.id, formValue);
    }

    history.push("/");

    // if (!formValue) {
    //   window.location.href = '/'
    // } else {
    //   history.push("/");
    // }
  }

  return (
    <div>
      <Header title={`Задача №${task.id}`}>
        <Button name="red" onClick={() => deleteTaskHandler(task.id)} />
      </Header>
      <label htmlFor="taskInput">Краткое описание</label>
      <input
        id="taskInput"
        type="text"
        value={formValue}
        onChange={inputHandler}
      />

      <Button name="blue" onClick={() => clickHandler()}>
        {taskChanged ? "сохранить" : "вернуться к списку"}
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  editTask: actionEditTask,
  removeTask: actionDeleteTask
};

export const EditTaskConnected = connect(
  null,
  mapDispatchToProps
)(EditTask);
