import { FC } from 'react'
import cls from './DeleteTodo.module.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { IconButton } from '@mui/material'
import { useDeleteTodoMutation } from '../../api/todolistsApi'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { PageLoader } from 'widgets/PageLoader'

interface Props {
  todoId: string
}

export const DeleteTodo: FC<Props> = ({ todoId }) => {
  const [deleteTodo, { error, isLoading }] = useDeleteTodoMutation()

  const deleteTodoHandler = () => {
    deleteTodo(todoId).unwrap()
  }

  return (
    <div className={cls.DeleteTodolist}>
      <PageLoader isLoading={isLoading} />

      <IconButton onClick={deleteTodoHandler} aria-label='delete'>
        <DeleteOutlineIcon />
      </IconButton>

      <ErrorAlert errorMessage={error} />
    </div>
  )
}
