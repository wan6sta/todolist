import { FC } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

interface Props {
  errorMessage: FetchBaseQueryError | SerializedError | undefined
}

export const ErrorAlert: FC<Props> = ({ errorMessage }) => {
  const notify = () => {
    toast.error('Something went wrong', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      progress: undefined,
      theme: 'colored'
    })
  }

  if (errorMessage) {
    notify()
  }

  return (
    <ToastContainer
      position='top-right'
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      theme='colored'
    />
  )
}
