import { taskListApp, initialState } from "./taskReducers";
import { AnyAction } from "redux";
import {
  LOAD_TASKS,
  CREATE_TASK,
  EDIT_TASK,
  RESPONSE_ERROR,
  DELETE_TASK
} from "../actions/actionTypes";
import {
  loadActionData,
  loadActionExpect,
  createActionData,
  createActionExpect,
  editActionData,
  editActionExpect,
  deleteTaskData,
  deleteActionExpect
} from "./mockData";

describe("task reducer tests", () => {
  it("should return initial state", () => {
    expect(taskListApp(initialState, {} as AnyAction)).toEqual(initialState);
  });

  it("should handle LOAD_TASKS", () => {
    const loadAction = {
      type: LOAD_TASKS,
      payload: loadActionData
    };

    expect(taskListApp({}, loadAction)).toEqual(loadActionExpect);
  });

  it("should handle CREATE_TASK", () => {
    const createAction = {
      type: CREATE_TASK,
      payload: createActionData
    };

    expect(taskListApp(initialState, createAction)).toEqual(createActionExpect);
  });

  it("should handle EDIT_TASK", () => {
    const state = {
      data: [{ id: 3, title: "third test title" }],
      length: 1,
      success: false,
      error: ""
    };

    const editTaskAction = {
      type: EDIT_TASK,
      payload: editActionData
    };

    expect(taskListApp(state, editTaskAction)).toEqual(editActionExpect);
  });

  it("should handle DELETE_TASK", () => {
    const state = {
      data: [{ id: 3, title: "third test title" }],
      length: 1,
      success: false,
      error: ""
    };

    const deleteTaskAction = {
      type: DELETE_TASK,
      payload: deleteTaskData
    };

    expect(taskListApp(state, deleteTaskAction)).toEqual(deleteActionExpect);
  });

  it("should handle RESPONSE_ERROR", () => {
    const state = {
      data: [{ id: 3, title: "third test title" }],
      length: 1,
      success: false,
      error: ""
    };

    const deleteTaskErrorAction = {
      type: RESPONSE_ERROR,
      payload: {
        success:false, 
        error: "Заголовок не может быть пустым." 
      }
    };

    const expectedState = {
        data: [{ id: 3, title: "third test title" }],
        length: 1,
        success: false, 
        error: "Заголовок не может быть пустым." 
      };

    expect(taskListApp(state, deleteTaskErrorAction)).toEqual(expectedState);
  });
});
