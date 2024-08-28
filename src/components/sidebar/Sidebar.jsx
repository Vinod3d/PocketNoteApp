/* eslint-disable react/prop-types */
import WordIcon from '../WordIcon';
import './sidebar.css'
import { FaPlus } from "react-icons/fa6";

const Sidebar = ({ setOpenModal, groups, selectedGroup, setSelectedGroup}) => {

  return (
    <div className='sidebarContainer'>
        <h1 className="title">Pocket Notes</h1>
        <div className="groupList">
            {groups.map((group, index) => {
               return (
                    <div 
                        className="groupItem" 
                        key={index}
                        style={{
                            backgroundColor: selectedGroup === group ? '#DCDCDC' : '#fff',
                        }}
                        onClick={() => setSelectedGroup(group)}
                    >
                        <span className='groupIcon' style={{backgroundColor: group.color}}>
                            <span className="Icon">
                                <WordIcon groupName={group.groupName}/>
                            </span>
                        </span>
                        <h2 className='groupName'>{group.groupName}</h2>
                    </div>
                )
            })}
        </div>
        <button 
        className="AddBtn"
        onClick={()=>setOpenModal(true)}
        >
            <FaPlus />
        </button>
    </div>
  )
}

export default Sidebar