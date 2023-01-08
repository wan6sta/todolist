import { EditableSpan } from 'widgets/EditableSpan'
import { FC } from 'react'
import { useChangeTaskMutation } from '../../api/tasksApi'
import { PageLoader } from 'widgets/PageLoader'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { TaskModel } from '../../models/types/taskModel'

interface Props {
  task: TaskModel
}

export const ChangeTaskTitle: FC<Props> = props => {
  const { task } = props
  const [changeTaskTitle, { error, isLoading }] = useChangeTaskMutation()

  const changeTaskTitleHandler = (title: string) => {
    const newTask = { ...task, title }
    changeTaskTitle({
      taskId: task.id,
      todoId: task.todoListId,
      newTask
    }).unwrap()
  }

  return (
    <>
      <PageLoader isLoading={isLoading} />

      <EditableSpan title={task.title} callback={changeTaskTitleHandler} />

      <ErrorAlert errorMessage={error} />
    </>
  )
}
