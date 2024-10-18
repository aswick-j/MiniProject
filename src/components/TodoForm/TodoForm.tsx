import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../actions/Todos";

type Props = {};

const TodoForm = (props: Props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    setTitle("");
    setDesc("");
    dispatch(
      addTodos({
        title: title,
        description: desc,
        status: "pending",
      })
    );
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      ></input>
      <input
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        value={desc}
      ></input>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
