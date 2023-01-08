import cls from './AddNewTodo.module.css'
import AddIcon from '@mui/icons-material/Add'
import { Fab, Paper, TextField } from '@mui/material'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useAddNewTodoMutation } from '../../api/todolistsApi'
import { PageLoader } from 'widgets/PageLoader'
import { ErrorAlert } from 'widgets/ErrorAlert'

export const AddNewTodo = () => {
  const [showInput, setShowInput] = useState(false)
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const [addNewTodo, { error: addNewTodoError, isLoading }] =
    useAddNewTodoMutation()

  const showHandler = () => {
    setShowInput(true)
  }

  const hideHandler = () => {
    if (!title) {
      setError(`The field must contain characters`)
      return
    }

    if (title.length > 15) {
      setError('Maximum length 15 characters')
      return
    }

    addNewTodo(title).unwrap()
    setShowInput(false)
    setTitle('')
  }

  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      hideHandler()
    }
  }

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    error && setError('')

    setTitle(e.currentTarget.value)
  }

  return (
    <div className={cls.AddNewTodo}>
      <PageLoader isLoading={isLoading} />

      <Fab onClick={showHandler} color='primary' aria-label='add'>
        <AddIcon />
      </Fab>

      {showInput && (
        <Paper className={cls.paper}>
          <TextField
            onKeyDown={onEnterHandler}
            autoFocus
            onBlur={hideHandler}
            value={title}
            onChange={changeInputValue}
            label='Enter the title'
            variant='filled'
            color={error ? 'error' : 'info'}
          />
          <span className={cls.error}>{error}</span>
        </Paper>
      )}

      <ErrorAlert errorMessage={addNewTodoError} />
    </div>
  )
}
