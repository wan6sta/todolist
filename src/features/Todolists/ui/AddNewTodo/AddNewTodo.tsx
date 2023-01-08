import cls from './AddNewTodo.module.css'
import AddIcon from '@mui/icons-material/Add'
import { Fab, Paper } from '@mui/material'
import { useState } from 'react'
import { useAddNewTodoMutation } from '../../api/todolistsApi'
import { PageLoader } from 'widgets/PageLoader'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { ErrorTextField } from 'widgets/ErrorTextField'

export const AddNewTodo = () => {
  const [showInput, setShowInput] = useState(false)
  const [title, setTitle] = useState('')

  const [addNewTodo, { error: addNewTodoError, isLoading }] =
    useAddNewTodoMutation()

  const showHandler = () => {
    setShowInput(true)
  }

  const addNewTodoHandler = (title: string) => {
    if (isLoading) return
    addNewTodo(title).unwrap()
    setShowInput(false)
  }

  return (
    <div className={cls.AddNewTodo}>
      <PageLoader isLoading={isLoading} />

      <Fab
        disabled={isLoading}
        onClick={showHandler}
        color='primary'
        aria-label='add'
      >
        <AddIcon />
      </Fab>

      {showInput && (
        <Paper>
          <ErrorTextField
            title={title}
            setTitle={setTitle}
            callback={addNewTodoHandler}
          />
        </Paper>
      )}

      <ErrorAlert errorMessage={addNewTodoError} />
    </div>
  )
}
