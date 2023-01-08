import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'shared/assets/constants/BASE_URL'
import { AddNewTask, TaskModel, TasksResponse } from '../models/types/taskModel'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  tagTypes: ['Tasks'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: build => ({
    getTasks: build.query<TasksResponse<TaskModel[]>, string>({
      query: todoId => ({
        url: `/todo-lists/${todoId}/tasks`
      }),
      providesTags: result =>
        result
          ? [
              ...result.items.map(task => ({
                type: 'Tasks' as const,
                id: task.id
              })),
              { type: 'Tasks', id: 'LIST' }
            ]
          : [{ type: 'Tasks', id: 'LIST' }]
    }),
    addNewTask: build.mutation<any, AddNewTask>({
      query: args => ({
        url: `/todo-lists/${args.todoId}/tasks`,
        method: 'POST',
        body: { title: args.title }
      }),
      invalidatesTags: (result, error, { todoId }) => [
        { type: 'Tasks', todoId }
      ]
    })
  })
})

export const { useGetTasksQuery, useAddNewTaskMutation } = tasksApi
