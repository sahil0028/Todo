import React, { useEffect, useState } from "react";
// import { addTodo } from "./redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, removeTodo } from "./redux/slice/todoSlice";
import TaskInput from "./components/TaskInput";
import TaskLists from "./components/TaskLists";

const Todo = () => {

    // const [task, setTask] = useState([]);
    // const dispatch = useDispatch();
    // const stateTasks = useSelector((state) => state);


    // const handelSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(stateTasks.todo.length)
    //     dispatch(addTodo({
    //         task: task,
    //         completed: false
    //     }))
    //     setTask('')
    // }

    // const handleDelete=(id)=>{
    //     dispatch(removeTodo(id))
    // }

    // const handleUpdate =(id)=>{
    //     dispatch(completeTodo(id))
    // }
    // useEffect(()=>{
    //     console.log(stateTasks.todo)
    // },[stateTasks.todo])

  return (
    <div className="container mt-5 col-md-6">
        {/* input component to add task to list */}
        <TaskInput />
        {/* Lists components to show all the lists in the state */}
        <TaskLists />
    </div>
  );
};

export default Todo;
