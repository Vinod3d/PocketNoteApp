/* eslint-disable react/prop-types */
import './sidebar.css'
import { FaPlus } from "react-icons/fa6";

const Sidebar = ({setOpenModal}) => {
  return (
    <div className='sidebarContainer'>
        <h1 className="title">Pocket Notes</h1>
        <div className="groupList">
            <div className="groupItem">
                <span className='groupIcon'>
                    <span className="Icon">
                        MN
                    </span>
                </span>
                <h2 className='groupName'>Mango</h2>
            </div>
            <div className="groupItem">
                <span className='groupIcon'>
                    <span className="Icon">
                        MN
                    </span>
                </span>
                <h2 className='groupName'>Mango</h2>
            </div>
            <div className="groupItem">
                <span className='groupIcon'>
                    <span className="Icon">
                        MN
                    </span>
                </span>
                <h2 className='groupName'>Mango</h2>
            </div>
            <div className="groupItem">
                <span className='groupIcon'>
                    <span className="Icon">
                        MN
                    </span>
                </span>
                <h2 className='groupName'>Mango</h2>
            </div>
            <div className="groupItem">
                <span className='groupIcon'>
                    <span className="Icon">
                        MN
                    </span>
                </span>
                <h2 className='groupName'>Mango</h2>
            </div>
            <div className="groupItem">
                <span className='groupIcon'>
                    <span className="Icon">
                        MN
                    </span>
                </span>
                <h2 className='groupName'>Mango</h2>
            </div>
            <div className="groupItem">
                <span className='groupIcon'>
                    <span className="Icon">
                        MN
                    </span>
                </span>
                <h2 className='groupName'>Mango</h2>
            </div>
            <div className="groupItem">
                <span className='groupIcon'>
                    <span className="Icon">
                        MN
                    </span>
                </span>
                <h2 className='groupName'>Mango</h2>
            </div>
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