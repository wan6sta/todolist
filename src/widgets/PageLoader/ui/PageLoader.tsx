import cls from './PageLoader.module.css'
import { LinearProgress } from '@mui/material'
import { FC } from 'react'

interface Props {
  isLoading: boolean
}

export const PageLoader: FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <div className={cls.PageLoader}>
      <LinearProgress color='info' />
    </div>
  )
}
