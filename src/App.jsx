import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MainContent from './components/mainContent/MainContent'
import Modal from './components/modal/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <div className="homepage">
        <Sidebar setOpenModal={setOpenModal}/>
        <MainContent/>
        {openModal && 
        <Modal
          setOpenModal={setOpenModal}
        />}
        

      </div>
    </>
  )
}

export default App
