import cls from './EditableSpan.module.css'
import { ChangeEvent, FC, useState } from 'react'
import { TextField } from '@mui/material'
import { cn } from 'shared/lib/cn'

interface Props {
  title: string
  isTodolistTitle?: boolean
}

export const EditableSpan: FC<Props> = props => {
  const { title, isTodolistTitle } = props
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState(title)
  const [error, setError] = useState('')

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    error && setError('')

    setInputValue(e.currentTarget.value)
  }

  const onBlurHandler = () => {
    if (!inputValue) {
      setError(`The field must contain characters`)
      return
    }

    if (inputValue.length > 15) {
      setError('Maximum length 15 characters')
      return
    }

    setShowInput(false)
  }

  const onDoubleClickHandler = () => {
    setShowInput(true)
  }

  const EditableSpanClassName = cn(cls.EditableSpan, {
    [cls.todoTitle]: Boolean(isTodolistTitle)
  })

  return (
    <div className={EditableSpanClassName}>
      {showInput ? (
        <>
          <TextField
            autoFocus={true}
            value={inputValue}
            onChange={changeInputValue}
            color={error ? 'error' : 'info'}
            onBlur={onBlurHandler}
            className={cls.inputWrap}
            id='filled-basic'
            variant='standard'
          />
          <span className={cls.error}>{error}</span>
        </>
      ) : (
        <span onDoubleClick={onDoubleClickHandler}>{inputValue}</span>
      )}
    </div>
  )
}
