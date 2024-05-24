import { createSlice } from "@reduxjs/toolkit";

const todoSlice =createSlice({
    name: 'todo',
    // check the initial state of the store in local storage if present the set to initial state else set to empty array.
    initialState: localStorage.getItem('todo')? JSON.parse(localStorage.getItem('todo')) :[],
    reducers: {
        // addTodo is used to add the new task at end of state to the store.
        // and set updated state to the localstorage
        addTodo: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('todo',JSON.stringify(state))
        },
        // removetodo is used to remove the task from the store. using index of the inital state.
        // and set updated state to the localstorage
        removeTodo: (state, action) => {
            console.log(action.payload)
            state.splice(action.payload, 1)
            localStorage.setItem('todo', JSON.stringify(state))
        },
        // completeTodo is used to update the task complete status from true to false or vise versa using index of the inital state.
        // and set updated state to the localstorage
        completeTodo: (state, action) => {
            console.log(state)
            state[action.payload].completed =!state[action.payload].completed
            localStorage.setItem('todo', JSON.stringify(state))
        }

    }
})

// Action creators are generated for each case reducer function
export const { addTodo,completeTodo } = todoSlice.actions; 
export const { removeTodo } = todoSlice.actions; 

// Export the reducer, so that we can use it in the store
export default todoSlice.reducer;
