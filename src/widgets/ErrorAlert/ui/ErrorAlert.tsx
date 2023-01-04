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
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    })
  }

  if (errorMessage) {
    notify()
  }

  return (
    <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
  )
}
