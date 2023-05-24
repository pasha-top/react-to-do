import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from '../components/organisms/TaskList/TaskListSlice'

export const store = configureStore({
  reducer: {
    tasksValue: taskListReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})