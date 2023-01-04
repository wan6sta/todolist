import { Provider } from 'react-redux'
import { store } from '../lib/store'
import { FC, PropsWithChildren } from 'react'

export const StoreProvider: FC<PropsWithChildren> = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}
