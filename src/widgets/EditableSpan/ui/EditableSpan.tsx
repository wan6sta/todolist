import cls from './EditableSpan.module.css'
import { FC, useState } from 'react'
import { cn } from 'shared/lib/cn'
import { ErrorTextField } from '../../ErrorTextField'

interface Props {
  title: string
  isTodolistTitle?: boolean
  callback: (title: string) => void
}

export const EditableSpan: FC<Props> = props => {
  const { title, isTodolistTitle, callback } = props
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState(title)

  const onDoubleClickHandler = () => {
    setShowInput(true)
  }

  const EditableSpanClassName = cn(cls.EditableSpan, {
    [cls.todoTitle]: Boolean(isTodolistTitle)
  })

  return (
    <div className={EditableSpanClassName}>
      {showInput ? (
        <ErrorTextField
          textField={{ variant: 'standard' }}
          nonLabel
          title={inputValue}
          setTitle={setInputValue}
          hideCallback={setShowInput}
          callback={callback}
        />
      ) : (
        <div className={cls.span}>
          <span onDoubleClick={onDoubleClickHandler}>{inputValue}</span>
        </div>
      )}
    </div>
  )
}
