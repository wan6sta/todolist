export interface TodolistModel {
  id: string
  title: string
  addedDate: string
  order: number
}

export interface DefaultResponse<T = {}> {
  resultCode: number
  messages: string[]
  data: T
}

export interface ChangeTodoTitleArgs {
  todoId: string
  newTitle: string
}
