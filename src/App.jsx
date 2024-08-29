import { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Notes from './components/mainContent/Notes';
import MainContent from './components/mainContent/MainContent';
import Modal from './components/modal/Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [groupData, setGroupData] = useState({});
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (groupData.groupName && groupData.color) {
      const prevData = JSON.parse(localStorage.getItem('group')) || [];
      const groupExists = prevData.some(group => group.groupName === groupData.groupName);
  
      if (!groupExists) {
        const updatedData = [...prevData, groupData];
        localStorage.setItem('group', JSON.stringify(updatedData));
        setGroups(updatedData);
      } else {
        alert("A group with this name already exists. Please choose a different name.");
      }
    }
  }, [groupData]);
  

  useEffect(() => {
    const storedGroups = localStorage.getItem('group');
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className={`homepage ${isMobileView ? 'mobile' : 'desktop'}`}>
      {isMobileView ? (
        selectedGroup ? (
            <Notes selectedGroup={selectedGroup} notes={notes} setNotes={setNotes} setSelectedGroup={setSelectedGroup}/>
        ) : (
            <Sidebar
              setOpenModal={setOpenModal}
              groups={groups}
              selectedGroup={selectedGroup}
              setSelectedGroup={handleGroupSelect}
            />
        )
        
      ) : (
        <>
          <Sidebar
            setOpenModal={setOpenModal}
            groups={groups}
            selectedGroup={selectedGroup}
            setSelectedGroup={handleGroupSelect}
          />
          {selectedGroup ? (
            <Notes selectedGroup={selectedGroup} notes={notes} setNotes={setNotes} />
          ) : (
            <MainContent />
          )}
        </>
      )}

      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          setGroupData={setGroupData}
        />
      )}
    </div>
  );
};

export default App;
