import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MainContent from './components/mainContent/MainContent'
import Modal from './components/modal/Modal'
import Notes from './components/mainContent/Notes';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [groupData, setGroupData] = useState({});
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState(null);

  
  useEffect(() => {
    if (groupData.groupName && groupData.color) {
      const prevData = JSON.parse(localStorage.getItem('group')) || [];
      const updatedData = [...prevData, groupData];
      localStorage.setItem('group', JSON.stringify(updatedData));
      setGroups(updatedData);
    }
  }, [groupData]);
  
  useEffect(() => {
    const storedGroups = localStorage.getItem('group');
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);
  
  useEffect(() => {
    const grpName = selectedGroup?.groupName;
    if (grpName && notes !== null) {
      const prevData = JSON.parse(localStorage.getItem(grpName)) || [];
      const updatedData = [...prevData, notes];
      localStorage.setItem(grpName, JSON.stringify(updatedData));
    }
  }, [notes, selectedGroup]);
  


  return (
    <>
      <div className="homepage">
        <Sidebar 
          setOpenModal={setOpenModal}
          groups={groups}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
        
        />
        {selectedGroup ? 
        <Notes
          selectedGroup={selectedGroup}
          notes={notes}
          setNotes={setNotes}
        /> :
        <MainContent/>
      }
        
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
