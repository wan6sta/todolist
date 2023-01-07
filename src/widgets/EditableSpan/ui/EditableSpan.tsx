import cls from './EditableSpan.module.css'
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { TextField } from '@mui/material'
import { cn } from 'shared/lib/cn'

interface Props {
  title: string
  isTodolistTitle?: boolean
  callback?: (title: string) => void
}

export const EditableSpan: FC<Props> = props => {
  const { title, isTodolistTitle, callback } = props
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

    callback && callback(inputValue)
    setShowInput(false)
  }

  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onBlurHandler()
    }
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
            onKeyDown={onEnterHandler}
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
