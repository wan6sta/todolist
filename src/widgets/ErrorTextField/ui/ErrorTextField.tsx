import cls from './ErrorTextField.module.css'
import { TextField } from '@mui/material'
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { TextFieldProps } from '@mui/material/TextField/TextField'

interface Props {
  callback: (str: string) => void
  title: string
  setTitle: Function

  nonLabel?: boolean
  hideCallback?: Function
  nonOnBlur?: boolean
  textField?: TextFieldProps
}

export const ErrorTextField: FC<Props> = props => {
  const {
    callback,
    textField,
    title,
    setTitle,
    hideCallback,
    nonLabel,
    nonOnBlur
  } = props
  const [error, setError] = useState('')

  const hideHandler = () => {
    if (!title) {
      setError(`The field must contain characters`)
      return
    }

    if (title.length > 15) {
      setError('Maximum length 15 characters')
      return
    }

    callback(title)
    hideCallback && hideCallback(false)

    // For AddNewTodo
    !hideCallback && setTitle('')
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
    <div className={cls.ErrorTextField}>
      <TextField
        onKeyDown={onEnterHandler}
        autoFocus
        onBlur={nonOnBlur ? undefined : hideHandler}
        value={title}
        onChange={changeInputValue}
        label={nonLabel ? '' : textField?.label || 'Enter the title'}
        variant={textField?.variant || 'filled'}
        color={error ? 'error' : 'info'}
      />
      <span className={cls.error}>{error}</span>
    </div>
  )
}
