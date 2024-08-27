import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MainContent from './components/mainContent/MainContent'
import Modal from './components/modal/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [groupData, setGroupData] = useState({})
  
  useEffect(()=>{
    const prevData = JSON.parse(localStorage.getItem('group')) || [];
    
    const updatedData = [...prevData, groupData];
    localStorage.setItem('group', JSON.stringify(updatedData))
  },[groupData])


  return (
    <>
      <div className="homepage">
        <Sidebar setOpenModal={setOpenModal}/>
        <MainContent/>
        {openModal && 
        <Modal
          setOpenModal={setOpenModal}
          setGroupData={setGroupData}
        />}
        

      </div>
    </>
  )
}

export default App
