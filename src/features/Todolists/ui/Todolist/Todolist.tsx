import cls from './Todolist.module.css'
import { FC } from 'react'
import { EditableSpan } from 'widgets/EditableSpan'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { AddNewTask, FilterTask, Task, useGetTasksQuery } from 'features/Tasks'
import { Paper } from '@mui/material'
import { DeleteTodolist } from '../DeleteTodolist/DeleteTodolist'
import { AddNewTodo } from '../AddNewTodo/AddNewTodo'

interface Props {
  todoId: string
  title: string
}

export const Todolist: FC<Props> = props => {
  const { title, todoId } = props
  const { data, isLoading, error } = useGetTasksQuery(todoId)

  const tasks = data?.items.map(task => <Task task={task} />)

  return (
    <div className={cls.Todolist}>
      <div className={cls.title}>
        <EditableSpan isTodolistTitle title={title} />
        <DeleteTodolist />
      </div>

      <div className={cls.content}>
        <AddNewTask />
        <Paper className={cls.paper}>
          <div className={cls.tasks}>{tasks}</div>
          <FilterTask />
        </Paper>
      </div>

      <AddNewTodo />
      <ErrorAlert errorMessage={error} />
    </div>
  )
}
