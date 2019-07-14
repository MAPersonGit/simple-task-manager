import { Dispatch, AnyAction } from "redux";
import { responseTypes } from "../types/responseTypes";
import {
  LOAD_TASKS,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  RESPONSE_ERROR
} from "./actionTypes";

function setTasks(response: responseTypes): AnyAction {
  return {
    type: LOAD_TASKS,
    payload: response
  };
}

function createTask(response: responseTypes, title: string): AnyAction {
  return {
    type: CREATE_TASK,
    payload: { ...response, title }
  };
}

function editTask(
  response: responseTypes,
  id: number,
  title: string
): AnyAction {
  return {
    type: EDIT_TASK,
    payload: { ...response, id, title }
  };
}

function deleteTask(response: responseTypes, id: number): AnyAction {
  return {
    type: DELETE_TASK,
    payload: { ...response, id: id }
  };
}

function responseError(response: responseTypes): AnyAction {
  return {
    type: RESPONSE_ERROR,
    payload: response
  };
}

export const actionCreateTask = (title: string) => (
  dispatch: Dispatch<responseTypes>
) =>
  fetch("https://test.megapolis-it.ru/api/list/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title })
  })
    .then(res => res.json())
    .then(data => dispatch(createTask(data, title)));

export const loadTasks = () => (dispatch: Dispatch<responseTypes>) =>
  fetch("https://test.megapolis-it.ru/api/list/", {
    method: "GET"
  })
    .then(res => res.json())
    .then(data => dispatch(setTasks(data)));

export const actionEditTask = (id: number, title: string) => (
  dispatch: Dispatch<responseTypes>
) =>
  fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title })
  })
    .then(res => res.json())
    .then(data =>
      data.success
        ? dispatch(editTask(data, id, title))
        : dispatch(responseError(data))
    );

export const actionDeleteTask = (id: number) => (
  dispatch: Dispatch<responseTypes>
) =>
  fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data =>
      data.success
        ? dispatch(deleteTask(data, id))
        : dispatch(responseError(data))
    );
