import cls from './AddNewTask.module.css'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useAddNewTaskMutation } from '../../api/tasksApi'
import { FC, useState } from 'react'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { PageLoader } from 'widgets/PageLoader'
import { ErrorTextField } from 'widgets/ErrorTextField'

interface Props {
  todoId: string
}

export const AddNewTask: FC<Props> = ({ todoId }) => {
  const [addNewTask, { error, isLoading }] = useAddNewTaskMutation()
  const [value, setValue] = useState('')

  const addNewTaskHandler = () => {
    if (!value) return
    if (isLoading) return

    setValue('')
    addNewTask({ todoId, title: value }).unwrap()
  }

  return (
    <div className={cls.AddNewTask}>
      <PageLoader isLoading={isLoading} />

      <ErrorTextField
        textField={{ variant: 'outlined' }}
        callback={addNewTaskHandler}
        nonOnBlur
        title={value}
        setTitle={setValue}
      />
      <IconButton
        disabled={isLoading}
        onClick={addNewTaskHandler}
        aria-label='add'
      >
        <AddIcon />
      </IconButton>

      <ErrorAlert errorMessage={error} />
    </div>
  )
}
