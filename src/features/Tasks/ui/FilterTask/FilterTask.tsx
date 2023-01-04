import cls from './FilterTask.module.css'
import { Button } from '@mui/material'

export const FilterTask = () => {
  return (
    <div className={cls.FilterTask}>
      <Button>All</Button>
      <Button color='error'>Active</Button>
      <Button color='success'>Completed</Button>
    </div>
  )
}
