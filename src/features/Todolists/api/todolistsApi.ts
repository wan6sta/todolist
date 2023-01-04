import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'shared/assets/constants/BASE_URL'

export const todolistsApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: build => ({
    getTodo: build.query({
      query: () => ({
        url: '/todo-lists'
      })
    })
  })
})

export const { useGetTodoQuery } = todolistsApi
