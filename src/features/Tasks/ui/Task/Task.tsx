import cls from './Task.module.css'
import { FC } from 'react'
import { TaskModel } from '../../models/types/taskModel'
import { EditableSpan } from 'widgets/EditableSpan'
import { Checkbox } from '@mui/material'
import { DeleteTask } from '../DeleteTask/DeleteTask'

interface Props {
  task: TaskModel
}

export const Task: FC<Props> = props => {
  const { task } = props

  return (
    <div className={cls.Task}>
      <Checkbox />
      <EditableSpan title={task.title} callback={() => {}} />
      <DeleteTask taskId={task.id} todoId={task.todoListId} />
    </div>
  )
}
