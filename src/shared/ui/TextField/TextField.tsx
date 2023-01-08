import cls from './TextField.module.css'
import { FC } from 'react'
import { TextFieldProps } from '@mui/material'

export const TextField: FC<TextFieldProps> = props => {
  const { ...restProps } = props

  return <TextField className={cls.TextField} {...restProps} />
}
