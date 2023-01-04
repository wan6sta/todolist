import cls from './TextField.module.css'
import { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const TextField: FC<Props> = props => {
  const { ...restProps } = props

  return <input className={cls.TextField} {...restProps} />
}
