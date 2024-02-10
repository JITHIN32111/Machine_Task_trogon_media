import React from 'react'
import Header from './components/Header'
import Messages from './components/Messages'
import Posts from './components/Posts'
import UserMenuLeft from './components/UserMenuLeft'
function App() {
  return (
    <div>
      <>
      <Header/>
      </>
      <div className='bg-zinc-50 py-6 h-[1000px]'>
      <UserMenuLeft/>
      </div>
    </div>
  )
}

export default App
