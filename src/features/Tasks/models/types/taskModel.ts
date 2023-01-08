export interface TaskModel {
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

export interface TasksResponse<T> {
  error: string
  items: T
  totalCount: number
}

export interface AddNewTask {
  title: string
  todoId: string
}
