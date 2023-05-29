import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from './features/TaskList/TaskListSlice'

export const store = configureStore({
  reducer: {
    tasksValue: taskListReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})