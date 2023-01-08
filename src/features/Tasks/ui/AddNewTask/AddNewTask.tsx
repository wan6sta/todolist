import cls from './AddNewTask.module.css'
import { IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useAddNewTaskMutation } from '../../api/tasksApi'
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { PageLoader } from 'widgets/PageLoader'

interface Props {
  todoId: string
}

export const AddNewTask: FC<Props> = ({ todoId }) => {
  const [addNewTask, { error, isLoading }] = useAddNewTaskMutation()
  const [value, setValue] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const addNewTaskHandler = () => {
    if (!value) return

    setValue('')
    addNewTask({ todoId, title: value })
  }

  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      addNewTaskHandler()
    }
  }

  return (
    <div className={cls.AddNewTask}>
      <PageLoader isLoading={isLoading} />

      <TextField
        value={value}
        onKeyDown={onEnterHandler}
        onChange={onChangeHandler}
        label='Enter the title'
        variant='outlined'
      />
      <IconButton onClick={addNewTaskHandler} aria-label='add'>
        <AddIcon />
      </IconButton>

      <ErrorAlert errorMessage={error} />
    </div>
  )
}
