import React, { useState, useEffect } from "react";
import { match } from "react-router-dom";
import { task } from "../../types";
import { Header } from "../header/header";
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
  const [task, setTask] = useState({ title: "", id: 0 });
  const [formValue, setFormValue] = useState(task.title);
  const [taskChanged, setTaskChanged] = useState(false);
  const [error, setError] = useState("");


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
    if (taskChanged && formValue) {
      editTask(task.id, formValue);
    } else {
      setError("Заголовок не может быть пустым")
    }

    if (formValue) {
      history.push("/");
    }
  }

  useEffect(() => {
    const task = tasks.find(
      (task: task) => task.id === Number(params.taskID)
    );

    if (task) {
      setTask(task);
      setFormValue(task.title);
    }

  }, [tasks])

  return (
    <div>
      <Header title={`Задача №${task.id}`}>
        <Button name="red" onClick={() => deleteTaskHandler(task.id)}>
          удалить
        </Button>
      </Header>

      <div className={s.editBox}>
        <label htmlFor="taskInput" className={s.label}>
          Краткое описание
        </label>
        <input
          id="taskInput"
          className={s.field}
          type="text"
          value={formValue}
          onChange={inputHandler}
        />
        <p className={s.error}>{error}</p>
        <div className={s.buttonBox}>
        <Button name="blue" onClick={() => clickHandler()}>
          {taskChanged ? "сохранить" : "вернуться к списку"}
        </Button>
        </div>
      </div>
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
