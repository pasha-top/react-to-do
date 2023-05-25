import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from '../components/features/TaskList/TaskListSlice'
import { apiSlice } from '../components/features/TaskList/TaskApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['apiTaskListSlice'],
}

export const rootReducers = combineReducers({
  tasksValue: taskListReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
})

setupListeners(store.dispatch)
export default store