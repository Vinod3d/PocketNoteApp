import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MainContent from './components/mainContent/MainContent'
import Modal from './components/modal/Modal'
import Notes from './components/mainContent/Notes';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [groupData, setGroupData] = useState({});
  const [groups, setGroups] = useState([]);
  
  useEffect(() => {
    if (groupData.groupName && groupData.color) {
      const prevData = JSON.parse(localStorage.getItem('group')) || [];
      const updatedData = [...prevData, groupData];
      localStorage.setItem('group', JSON.stringify(updatedData));
    }

    let storedGroups = localStorage.getItem('group');
    if (storedGroups) {
      let groups =  JSON.parse(storedGroups);
      setGroups(groups);
    }
  }, [groupData]);


  return (
    <>
      <div className="homepage">
        <Sidebar 
          setOpenModal={setOpenModal}
          groups={groups}
        
        />
        {/* <MainContent/> */}
        <Notes/>
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
