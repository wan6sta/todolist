import cls from './Todolist.module.css'
import { FC } from 'react'
import { EditableSpan } from 'widgets/EditableSpan'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { Task, useGetTasksQuery } from 'features/Tasks'
import { Paper } from '@mui/material'

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
      <EditableSpan isTodolistTitle title={title} />

      <Paper className={cls.todo}>
        <div className={cls.tasks}>{tasks}</div>
      </Paper>

      <ErrorAlert errorMessage={error} />
    </div>
  )
}
