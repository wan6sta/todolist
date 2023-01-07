import { FC } from 'react'
import { EditableSpan } from 'widgets/EditableSpan'
import { useChangeTodoTitleMutation } from '../../api/todolistsApi'
import { ErrorAlert } from 'widgets/ErrorAlert'
import { PageLoader } from 'widgets/PageLoader'

interface Props {
  todoId: string
  todoTitle: string
}

export const ChangeTitleTodo: FC<Props> = ({ todoTitle, todoId }) => {
  const [changeTitle, { error, isLoading }] = useChangeTodoTitleMutation()

  const changeTitleHandler = (newTitle: string) => {
    changeTitle({ todoId, newTitle }).unwrap()
  }

  return (
    <>
      <PageLoader isLoading={isLoading} />

      <EditableSpan
        callback={changeTitleHandler}
        isTodolistTitle
        title={todoTitle}
      />

      <ErrorAlert errorMessage={error} />
    </>
  )
}
