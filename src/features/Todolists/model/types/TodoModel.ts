export interface Todolist {
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
