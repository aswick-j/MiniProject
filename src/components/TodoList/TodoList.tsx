import React, { useEffect } from "react";
import { getTodos } from "../../actions/Todos";
import { useDispatch, useSelector } from "react-redux";
import { getTodoState } from "../../features/todoSlice";
import "./TodoList.css";
import { IGetTodo } from "../../types/getTodo";

type Props = {};

const TodoList = (props: Props) => {
  const dispatch = useDispatch();

  const { isGetTodoLoading, todosData, isGetTodoError } =
    useSelector(getTodoState);

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <ul>
        {!isGetTodoLoading &&
          todosData.length > 0 &&
          todosData.map((item: IGetTodo, index: number) => (
            <div key={index}>
              <li>
                <h3>{item.title}</h3>
                <h4>{item.description}</h4>
                <button>Edit</button>
                <button>Delete</button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
