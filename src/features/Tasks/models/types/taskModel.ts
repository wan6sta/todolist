export interface TaskModel {
  addedDate: string
  deadline: string
  description: string
  id: string
  order: number
  priority: number
  startDate: string
  status: TaskStatus
  title: string
  todoListId: string
}

export enum TaskStatus {
  'active',
  'completed'
}

export interface TasksResponse<T = {}> {
  error: string
  items: T
  totalCount: number
}

export interface AddNewTask {
  title: string
  todoId: string
}

export interface DeleteTask {
  taskId: string
  todoId: string
}

export interface UpdateTaskModel {
  title: string
  description: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline: string
}

export interface ChangeTask {
  taskId: string
  todoId: string
  newTask: Partial<UpdateTaskModel>
}
