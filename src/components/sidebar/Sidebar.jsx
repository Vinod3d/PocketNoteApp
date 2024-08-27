/* eslint-disable react/prop-types */
import './sidebar.css'
import { FaPlus } from "react-icons/fa6";

const Sidebar = ({ setOpenModal, groups}) => {

  return (
    <div className='sidebarContainer'>
        <h1 className="title">Pocket Notes</h1>
        <div className="groupList">
            {groups.map((group, index) => {
                const words = group.groupName.split(" ");
                let initials = words[0].slice(0, 1);
                if(words.length > 1){
                    initials += words[1].slice(0, 1);
                }
               return (
                    <div className="groupItem" key={index}>
                        <span className='groupIcon' style={{backgroundColor: group.color}}>
                            <span className="Icon">
                                {initials}
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