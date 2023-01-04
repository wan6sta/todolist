import { configureStore } from '@reduxjs/toolkit'
import { todolistsApi } from 'features/Todolists'
import { tasksApi } from 'features/Tasks'

export const store = configureStore({
  reducer: {
    [todolistsApi.reducerPath]: todolistsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todolistsApi.middleware, tasksApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
