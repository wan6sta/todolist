import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'shared/assets/constants/BASE_URL'
import {
  AddNewTask,
  ChangeTask,
  DeleteTask,
  TaskModel,
  TasksResponse
} from '../models/types/taskModel'

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
    addNewTask: build.mutation<TasksResponse<TaskModel>, AddNewTask>({
      query: args => ({
        url: `/todo-lists/${args.todoId}/tasks`,
        method: 'POST',
        body: { title: args.title }
      }),
      invalidatesTags: (result, error, { todoId }) => [
        { type: 'Tasks', todoId }
      ]
    }),
    deleteTask: build.mutation<TasksResponse, DeleteTask>({
      query: args => ({
        url: `/todo-lists/${args.todoId}/tasks/${args.taskId}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: 'Tasks', taskId }
      ]
    }),
    changeTask: build.mutation<TasksResponse<TaskModel>, ChangeTask>({
      query: args => ({
        url: `/todo-lists/${args.todoId}/tasks/${args.taskId}`,
        method: 'PUT',
        body: args.newTask
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: 'Tasks', taskId }
      ]
    })
  })
})

export const {
  useGetTasksQuery,
  useAddNewTaskMutation,
  useDeleteTaskMutation,
  useChangeTaskMutation
} = tasksApi
