import React from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import UserMenuLeft from './components/UserMenuLeft'
import Messages from './components/Messages'
function App() {
  return (
    <div>
      <>
      <Header/>
      </>
      <div className='bg-zinc-50 py-6 h-full flex flex-row justify-start  gap-x-4 items-start'>
      <UserMenuLeft/>
      <Posts/>
      <div>
      <Messages/>
      {/* <Messages/> */}

      </div>
      </div>
    </div>
  )
}

export default App
