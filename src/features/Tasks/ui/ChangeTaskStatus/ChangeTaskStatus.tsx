import { Checkbox } from '@mui/material'
import { FC, useState } from 'react'
import { TaskModel, TaskStatus } from '../../models/types/taskModel'
import { useChangeTaskMutation } from '../../api/tasksApi'
import { PageLoader } from 'widgets/PageLoader'
import { ErrorAlert } from 'widgets/ErrorAlert'

interface Props {
  task: TaskModel
}

export const ChangeTaskStatus: FC<Props> = ({ task }) => {
  const [changeTaskStatus, { error, isLoading }] = useChangeTaskMutation()
  const [checked, setChecked] = useState(Boolean(task.status))

  const changeTaskStatusHandler = () => {
    if (isLoading) return

    const status = checked ? TaskStatus.active : TaskStatus.completed
    const newTask = { ...task, status }
    changeTaskStatus({
      taskId: task.id,
      todoId: task.todoListId,
      newTask
    }).unwrap()

    setChecked(prev => !prev)
  }

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Checkbox checked={checked} onChange={changeTaskStatusHandler} />
      <ErrorAlert errorMessage={error} />
    </>
  )
}
