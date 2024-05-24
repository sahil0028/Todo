import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, removeTodo } from '../redux/slice/todoSlice'

const TaskLists = () => {
    const dispatch = useDispatch()

    // useselector hook is used to get the states from the store.
    const stateTasks = useSelector((state) => state);

    // dispatch the remove action to the store.
    const handleDelete=(id)=>{
        dispatch(removeTodo(id))
    }

    // dispatch the task complete action to the store.
    const handleUpdate =(id)=>{
        dispatch(completeTodo(id))
    }

  return (
    <div className="tasks mt-3">
            <h2 className="text-capitalize fst-italic fw-semibold mb-3">Pending</h2>
            <ul className="list-group">
            {
                stateTasks?.todo?.map((elem, index) => {
                    if(!elem.completed){
                        return(
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="task text-wrap flex-grow-1" style={{maxWidth:'60%',minWidth:'50%',wordBreak:'break-word'}}> {elem.task}</div>
                                <div className="btns">
                                    <button className=" mx-2 btn btn-danger" onClick={()=>handleDelete(index)}>Delete</button>
                                    <button className="btn btn-success" onClick={()=>{handleUpdate(index)}}>✔</button>
                                </div>
                            </li>
                        )
                    }
                    else{
                        return
                    }
                    
                })
            }
            </ul>
            <h2 className="text-capitalize fst-italic fw-semibold mb-3">completed</h2>
            <ul className="list-group">
            {
                stateTasks?.todo?.map((elem, index) => {
                    if(elem.completed){
                        return(
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="task text-wrap" style={{width:'60%', wordBreak:'break-word'}}> {elem.task}</div>
                                <div className="btns">
                                    <button className=" mx-2 btn btn-danger" onClick={()=>handleDelete(index)}>Delete</button>
                                    <button className="btn btn-success" onClick={()=>{handleUpdate(index)}}>❌</button>
                                </div>
                            </li>
                        )
                    }
                    else{
                        return
                    }
                    
                })
            }
            </ul>
        </div>
  )
}

export default TaskLists