import cls from './Todolist.module.css'
import { FC } from 'react'
import { EditableSpan } from 'widgets/EditableSpan'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { AddNewTask, FilterTask, Task, useGetTasksQuery } from 'features/Tasks'
import { Paper } from '@mui/material'
import { DeleteTodo } from '../DeleteTodo/DeleteTodo'

interface Props {
  todoId: string
  title: string
}

export const Todolist: FC<Props> = props => {
  const { title, todoId } = props
  const { data, error } = useGetTasksQuery(todoId)

  const tasks = data?.items.map(task => <Task key={task.id} task={task} />)

  return (
    <div className={cls.Todolist}>
      <div className={cls.title}>
        <EditableSpan isTodolistTitle title={title} />
        <DeleteTodo todoId={todoId} />
      </div>

      <div className={cls.content}>
        <AddNewTask />
        <Paper className={cls.paper}>
          <div className={cls.tasks}>{tasks}</div>
          <FilterTask />
        </Paper>
      </div>

      <ErrorAlert errorMessage={error} />
    </div>
  )
}
