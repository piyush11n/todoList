import { toast } from "../../utils/toast";
import { ACTION_TYPE,UPDATE_LIST } from "../actionType";

export const getTodoListItems = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPE.GET_TODO_LIST
  });
};
export const addTodoListItems = (payload) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPE.ADD_TODO_LIST,
    payload: payload
  });
  toast.success("Item added to list")
};
export const updateTodoList = (payload) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPE.UPDATE_LIST,
    payload: payload
  });
};


