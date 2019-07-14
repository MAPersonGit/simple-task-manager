import React, { useState, useEffect } from "react";
import { actionCreateTask } from "../../actions/actions";
import { connect } from "react-redux";
import { Button } from "../button/button";
import s from "./popup.module.scss";

interface PopupProps {
  createTask: (title: string) => void;
}

export const Popup = ({ createTask }: PopupProps): JSX.Element | null => {
  const [isVisible, setVisible] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [error, setError] = useState("");

  function inputHandler({
    currentTarget
  }: React.FormEvent<HTMLInputElement>): void {
    const { value } = currentTarget;
    setFormValue(value);
  }


  function create() {
    if (formValue) {
      createTask(formValue);
      setVisible(false);
    } else {
      setError("Заголовок не может быть пустым");
    }
  }

  useEffect(() => {

    return () => {
      setFormValue("");
      setError("");
    }
  }, [isVisible])

  return !isVisible ? (
    <Button name={"green"} onClick={() => setVisible(!isVisible)}>
      Добавить
    </Button>
  ) : (
    <div className={s.popup}>
      <div className={s.popupContent}>
        <button
          onClick={() => setVisible(!isVisible)}
          className={s.closeButton}
        />
        <label htmlFor="taskInput" className={s.label}>
          Краткое описание
        </label>
        <input
          id="taskInput"
          type="text"
          className={s.field}
          onChange={e => inputHandler(e)}
        />
        <p className={s.error}>{error}</p>
        <div className={s.popupFooter}>
          <Button
            name="green"
            onClick={() => create()}
          >
            создать
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { createTask: actionCreateTask };

export const PopupConnected = connect(
  null,
  mapDispatchToProps
)(Popup);
