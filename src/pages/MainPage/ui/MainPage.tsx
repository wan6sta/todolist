import cls from './MainPage.module.css'
import { AddNewTodo, Todolist, useGetTodosQuery } from 'features/Todolists'
import { PageLoader } from 'widgets/PageLoader'
import { ErrorAlert } from 'widgets/ErrorAlert'

export const MainPage = () => {
  const { data = [], isLoading, error } = useGetTodosQuery()

  const todolists = data.map(todo => (
    <Todolist key={todo.id} todoId={todo.id} title={todo.title} />
  ))

  return (
    <div className={cls.MainPage}>
      <PageLoader isLoading={isLoading} />

      <div className={cls.todolists}>
        {todolists.length ? todolists : <h1>Add the first todolist</h1>}
      </div>

      <AddNewTodo />
      <ErrorAlert errorMessage={error} />
    </div>
  )
}
