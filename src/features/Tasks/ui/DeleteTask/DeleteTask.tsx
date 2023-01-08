import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import { useDeleteTaskMutation } from '../../api/tasksApi'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { PageLoader } from 'widgets/PageLoader'
import { FC } from 'react'

interface Props {
  taskId: string
  todoId: string
}

export const DeleteTask: FC<Props> = ({ taskId, todoId }) => {
  const [deleteTask, { error, isLoading }] = useDeleteTaskMutation()

  const deleteTaskHandler = () => {
    if (isLoading) return

    deleteTask({ taskId, todoId })
  }

  return (
    <>
      <PageLoader isLoading={isLoading} />

      <IconButton
        onClick={deleteTaskHandler}
        disabled={isLoading}
        aria-label='delete'
      >
        <DeleteIcon />
      </IconButton>

      <ErrorAlert errorMessage={error} />
    </>
  )
}
