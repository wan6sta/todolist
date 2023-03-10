import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'shared/assets/constants/BASE_URL'
import {
  ChangeTodoTitleArgs,
  DefaultResponse,
  TodolistModel
} from '../model/types/TodoModel'

export const todolistsApi = createApi({
  reducerPath: 'todoApi',
  tagTypes: ['Todolists'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }),
  endpoints: build => ({
    getTodos: build.query<TodolistModel[], void>({
      query: () => ({
        url: '/todo-lists'
      }),
      providesTags: result =>
        result
          ? [
              ...result.map(todo => ({
                type: 'Todolists' as const,
                id: todo.id
              })),
              { type: 'Todolists', id: 'LIST' }
            ]
          : [{ type: 'Todolists', id: 'LIST' }]
    }),
    addNewTodo: build.mutation<
      DefaultResponse<{ item: TodolistModel }>,
      string
    >({
      query: title => ({
        url: '/todo-lists',
        method: 'POST',
        body: { title }
      }),
      invalidatesTags: [{ type: 'Todolists', id: 'LIST' }]
    }),
    deleteTodo: build.mutation<DefaultResponse, string>({
      query: todoId => ({
        url: `/todo-lists/${todoId}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, todoId) => [
        { type: 'Todolists', todoId }
      ]
    }),
    changeTodoTitle: build.mutation<DefaultResponse, ChangeTodoTitleArgs>({
      query: args => ({
        url: `/todo-lists/${args.todoId}`,
        method: 'PUT',
        body: { title: args.newTitle }
      }),
      invalidatesTags: (result, error, { todoId }) => [
        { type: 'Todolists', todoId }
      ]
    })
  })
})

export const {
  useGetTodosQuery,
  useAddNewTodoMutation,
  useDeleteTodoMutation,
  useChangeTodoTitleMutation
} = todolistsApi
