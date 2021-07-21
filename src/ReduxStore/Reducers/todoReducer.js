import { ACTION_TYPE } from "../actionType";

export const initialState = {
  todoList: [{ item:  " Go to the Library", isSelected: 0},{ item: "Have Lunch", isSelected: 0},{ item:  "Meet friends", isSelected: 0}]
};

export const todoReducer = (state = initialState, action) => {
//   console.log("action",action)
  switch (action.type) {
    case ACTION_TYPE.GET_TODO_LIST:
      return {
        ...state,
        todoList: state.todoList
      };
      case ACTION_TYPE.ADD_TODO_LIST:
        return {
          ...state,
          todoList: [...state.todoList,action.payload]
        };
        case ACTION_TYPE.UPDATE_LIST:
          return {
            ...state,
            todoList: [...action.payload]
          };
    default:
      return state;
  }
};
