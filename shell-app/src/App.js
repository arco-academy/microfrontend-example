import React from 'react'

import Header from 'header/App'
import Content from 'content/App'

import { ToastContainer } from 'react-toastify';

function ShellApp() {

  return (
    <div className='h-full w-full bg-black'>
      <h1 className='font-bold text-white text-center'>SHELL APP</h1>
      <Header />
      <Content/>
      <ToastContainer />
    </div>
  )
}

export default ShellApp;