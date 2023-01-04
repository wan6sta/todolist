import cls from './AddNewTask.module.css'
import { IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export const AddNewTask = () => {
  return (
    <div className={cls.AddNewTask}>
      <TextField label='Enter the title' variant='outlined' />
      <IconButton aria-label='add'>
        <AddIcon />
      </IconButton>
    </div>
  )
}
