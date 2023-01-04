import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'shared/assets/constants/BASE_URL'
import { TaskModel, TasksResponse } from '../models/types/taskModel'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: build => ({
    getTasks: build.query<TasksResponse<TaskModel[]>, string>({
      query: todoId => ({
        url: `/todo-lists/${todoId}/tasks`
      })
    })
  })
})

export const { useGetTasksQuery } = tasksApi
