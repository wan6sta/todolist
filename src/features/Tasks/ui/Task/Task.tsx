import cls from './Task.module.css'
import { FC } from 'react'
import { TaskModel } from '../../models/types/taskModel'
import { EditableSpan } from 'widgets/EditableSpan'
import { Checkbox, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface Props {
  task: TaskModel
}

export const Task: FC<Props> = props => {
  const { task } = props

  return (
    <div className={cls.Task}>
      <Checkbox />
      <EditableSpan title={task.title} />
      <IconButton aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
