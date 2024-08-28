import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Notes from './components/mainContent/Notes';
import MainContent from './components/mainContent/MainContent';
import Modal from './components/modal/Modal';
// import './App.css';  // Ensure to include this for necessary CSS adjustments

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

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    if (isMobileView) {
      // setIsMobileView(false);
    }
  };

  return (
    <div className={`homepage ${isMobileView ? 'mobile' : 'desktop'}`}>
      {isMobileView ? (
        selectedGroup ? (
          <>
            <Notes selectedGroup={selectedGroup} notes={notes} setNotes={setNotes} setSelectedGroup={setSelectedGroup}/>
          </>
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
