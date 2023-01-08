import cls from './Task.module.css'
import { FC } from 'react'
import { TaskModel } from '../../models/types/taskModel'
import { DeleteTask } from '../DeleteTask/DeleteTask'
import { ChangeTaskTitle } from '../ChangeTaskTitle/ChangeTaskTitle'
import { ChangeTaskStatus } from '../ChangeTaskStatus/ChangeTaskStatus'

interface Props {
  task: TaskModel
}

export const Task: FC<Props> = props => {
  const { task } = props

  return (
    <div className={cls.Task}>
      <ChangeTaskStatus task={task} />
      <ChangeTaskTitle task={task} />
      <DeleteTask taskId={task.id} todoId={task.todoListId} />
    </div>
  )
}
