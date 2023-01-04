import { configureStore } from '@reduxjs/toolkit'
import { todolistsApi } from 'features/Todolists'

export const store = configureStore({
  reducer: {
    [todolistsApi.reducerPath]: todolistsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todolistsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
