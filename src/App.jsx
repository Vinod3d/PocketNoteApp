import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MainContent from './components/mainContent/MainContent'

function App() {


  return (
    <>
      <div className="homepage">
        <Sidebar/>
        <MainContent/>
        {/* <Modal/> */}

      </div>
    </>
  )
}

export default App
