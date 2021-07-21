import { useState } from "react";
import { MeButton, MeTextField, MeListView } from "../../components/export";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../ReduxStore/Actions/index";
export default function HomeContainer() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.todoList);

  const [item, setItem] = useState("");
  const onChangeHandler = (e) => {
    let { value } = e.target;
    setItem(value);
  };
  const addToList = (e) => {
    e.preventDefault();
    setItem("");
    dispatch(todoActions.addTodoListItems(item));
  };
  const onSelectedList =async (list, index) => {
    let prevTodoList = todoList;
    if (list.isSelected === 0) {
      prevTodoList[index].isSelected = 1;
    } else if (list.isSelected === 1) {
      prevTodoList[index].isSelected = 2;
    }
    await dispatch(todoActions.updateTodoList(prevTodoList));
    dispatch(todoActions.getTodoListItems());
    // console.log("prevTodoList", prevTodoList, list);
  };
  return (
    <div className="container">
        <h1>Todo List App</h1>
      <MeTextField
        name="item"
        placeholder="Enter your list item"
        value={item}
        onChangeHandler={onChangeHandler}
      />
      <MeButton
        name="Submit"
        onClickHandler={addToList}
        disabled={item ? false : true}
      />
      <MeListView onSelectedList={onSelectedList} todoList={todoList} />
    </div>
  );
}
