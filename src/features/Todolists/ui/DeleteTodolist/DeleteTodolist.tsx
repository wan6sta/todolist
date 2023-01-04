import cls from './DeleteTodolist.module.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { IconButton } from '@mui/material'

export const DeleteTodolist = () => {
  return (
    <div className={cls.DeleteTodolist}>
      <IconButton aria-label='delete'>
        <DeleteOutlineIcon />
      </IconButton>
    </div>
  )
}
