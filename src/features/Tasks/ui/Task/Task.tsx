import cls from './Task.module.css'
import { FC } from 'react'
import { TaskModel } from '../../models/types/taskModel'
import { Checkbox } from '@mui/material'
import { DeleteTask } from '../DeleteTask/DeleteTask'
import { ChangeTaskTitle } from '../ChangeTaskTitle/ChangeTaskTitle'

interface Props {
  task: TaskModel
}

export const Task: FC<Props> = props => {
  const { task } = props

  return (
    <div className={cls.Task}>
      <Checkbox />
      <ChangeTaskTitle task={task} />
      <DeleteTask taskId={task.id} todoId={task.todoListId} />
    </div>
  )
}
