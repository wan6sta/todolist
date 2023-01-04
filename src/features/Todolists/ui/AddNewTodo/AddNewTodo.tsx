import cls from './AddNewTodo.module.css'
import AddIcon from '@mui/icons-material/Add'
import { Fab, Paper, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'

export const AddNewTodo = () => {
  const [showInput, setShowInput] = useState(false)
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

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

    setShowInput(false)
    setTitle('')
  }

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    error && setError('')

    setTitle(e.currentTarget.value)
  }

  return (
    <div className={cls.AddNewTodo}>
      <Fab onClick={showHandler} color='primary' aria-label='add'>
        <AddIcon />
      </Fab>

      {showInput && (
        <Paper className={cls.paper}>
          <TextField
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
    </div>
  )
}
