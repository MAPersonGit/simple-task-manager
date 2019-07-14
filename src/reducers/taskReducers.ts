import { AnyAction } from "redux";
import { task } from "../types/responseTypes";
import {
  LOAD_TASKS,
  CREATE_TASK,
  EDIT_TASK,
  RESPONSE_ERROR,
  DELETE_TASK
} from "../actions/actionTypes";

export const initialState = {
  data: [],
  length: 0,
  success: false,
  error: ""
};

export function taskListApp(state: any = initialState, action: AnyAction) {
  switch (action.type) {
    case LOAD_TASKS:
      return {
        ...action.payload
      };
    case CREATE_TASK:
      return {
        ...action.payload,
        data: [
          ...state.data,
          { id: action.payload.id, title: action.payload.title }
        ]
      };
    case EDIT_TASK:
      return {
        ...action.payload,
        data: state.data.map((task: task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        )
      };
    case DELETE_TASK:
      return {
        ...action.payload,
        data: state.data.filter((task: task) => task.id !== Number(action.payload.id))
      };
    case RESPONSE_ERROR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
