import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
        <h1 className="title">Pocket Notes</h1>
        <div className="groupList">
            <div className="groupItem">
                <span className='groupIcon'></span>
                <h2 className='groupName'>Mango</h2>
            </div>
        </div>
        <button className="AddBtn">+</button>
    </div>
  )
}

export default Sidebar