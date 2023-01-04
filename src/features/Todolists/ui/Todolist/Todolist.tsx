import cls from './Todolist.module.css'
import { FC } from 'react'

interface Props {
  todoId: string
  title: string
}

export const Todolist: FC<Props> = props => {
  const { title, todoId } = props

  return (
    <div className={cls.Todolist}>
      <span>{title}</span>
    </div>
  )
}
