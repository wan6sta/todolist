export type TaskModel = {
  addedDate: string
  deadline: string
  description: string
  id: string
  order: number
  priority: number
  startDate: string
  status: number
  title: string
  todoListId: string
}

export type TasksResponse<T> = {
  error: string
  items: T
  totalCount: number
}
