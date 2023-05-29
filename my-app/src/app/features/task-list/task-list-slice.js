import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import taskListService from "../../../services/task-list/task-list-service"

export const getTasks = createAsyncThunk(
    "taskList/get",
    async () => {
        return await taskListService.get();
    }
);

export const addTask = createAsyncThunk(
    "taskList/add",
    async (task) => {
        await taskListService.add(task.title, task.done);
        return;
    }
);

export const updateTask = createAsyncThunk(
    "taskList/update",
    async ({ id, title, done }) => {
        await taskListService.update(id, title, done);
    }
);


export const deleteTask = createAsyncThunk(
    "taskList/delete",
    async ({ id }) => {
        await taskListService.remove(id);
    }
);




export class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.done = false;
    }
}

export const initialState = {
    tasks: [],
    newTaskTitle: ''
};


export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        updateNewTaskTitle: (state, action) => {
            state.newTaskTitle = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
        });
        builder.addCase(addTask.fulfilled, () => { });
        builder.addCase(deleteTask.fulfilled, () => { });
    }
});

// Action creators are generated for each case reducer function
export const { updateNewTaskTitle } = taskListSlice.actions

export default taskListSlice.reducer