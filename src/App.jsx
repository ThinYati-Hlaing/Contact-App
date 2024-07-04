import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, SignIn, SignUp } from './page'
import { Toast, ToastProvider } from '@radix-ui/react-toast'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className=' w-screen h-screen '>
      <ToastProvider>
        <Toast />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Toaster position="bottom-left" reverseOrder={false} />
      </ToastProvider>
    </div>
  )
}

export default App