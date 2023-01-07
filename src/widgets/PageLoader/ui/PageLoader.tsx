import { FC } from 'react'
import cls from './PageLoader.module.css'
import { LinearProgress } from '@mui/material'
import { Portal } from 'shared/ui/Portal/Portal'

interface Props {
  isLoading: boolean
}

export const PageLoader: FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <Portal element={document.getElementById('root')}>
      <div className={cls.PageLoader}>
        <LinearProgress color='info' />
      </div>
    </Portal>
  )
}
