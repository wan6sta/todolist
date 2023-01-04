import cls from './MainPage.module.css'
import { Todolist, useGetTodoQuery } from 'features/Todolists'
import { PageLoader } from 'widgets/PageLoader'
import { ErrorAlert } from 'widgets/ErrorAlert'

export const MainPage = () => {
  const { data: todolists = [], isLoading, error } = useGetTodoQuery()

  return (
    <div className={cls.MainPage}>
      <PageLoader isLoading={isLoading} />

      {todolists.map(todo => (
        <Todolist key={todo.id} todoId={todo.id} title={todo.title} />
      ))}

      <ErrorAlert errorMessage={error} />
    </div>
  )
}
