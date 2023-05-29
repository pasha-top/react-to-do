import { createSlice } from "@reduxjs/toolkit";
import { TaskListService } from '../../../services/TaskList/TaskList.service'

// export const create = createAsyncThunk(
//     "tutorials/create",
//     async ({ title, description }) => {
//         const res = await TaskListService.create({ title, description });
//         return res.data;
//     }
// );


export class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.done = false;
    }
}

const initialState = {
    tasks: [],
    id: 0,
    newTaskTitle: ''
};


export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        add: (state) => {
            state.tasks.push(new Task(++state.id, state.newTaskTitle))
            state.newTaskTitle = initialState.newTaskTitle;
        },
        updateTask: (state, action) => {
            let id = action.payload.id;
            let title = action.payload.title;
            let done = action.payload.done;

            state.tasks.filter(i => i.id === id).map(task => {
                task.title = title;
                task.done = done;
            });

            state.tasks = [...state.tasks];
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter(i => i.id !== action.payload.id);
        },
        updateNewTaskTitle: (state, action) => {
            state.newTaskTitle = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, updateTask, remove, updateNewTaskTitle } = taskListSlice.actions

export default taskListSlice.reducer