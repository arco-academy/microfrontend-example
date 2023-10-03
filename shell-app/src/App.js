import React from 'react'

import Header from 'header/App'
import Content from 'content/App'

import useUser from './hooks/useUser';

function ShellApp() {
  const user = useUser((state => state.user))

  return (
    <div className='h-full w-full bg-black'>
      <h1 className='font-bold text-white text-center'>SHELL APP</h1>
      <Header />
      <Content />
    </div>
  )
}

export default ShellApp;