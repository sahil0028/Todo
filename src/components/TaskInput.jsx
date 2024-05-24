import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';

const TaskInput = () => {

    const [task, setTask] = useState([]);
    // use dispatch is used when we need to acces reducers or actions form the store
    const dispatch = useDispatch();

    // used when user add new task to input field and dispatch that task to redux store
    // reset the value of input to empty string.
    const handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo({
            task: task,
            completed: false
        }))
        setTask('')
    }
  return (
    <>
        <h1 className="text-center text-capitalize fst-italic fw-bold text-decoration-underline mb-5">Todo List</h1>
        <form onSubmit={handelSubmit} className="mt-3">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="✍Task Here"
                    value={task}
                    required
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
        </form>
    </>
  )
}

export default TaskInput