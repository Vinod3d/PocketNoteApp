import { useState } from "react";
import "./modal.css";

const Modal = ({setOpenModal}) => {
  const [formData, setFormData] = useState({ grpName: " ", color: " " });
  const color = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModalClose = (e)=>{
    if(e.target.className == "modalOverlay"){
        setOpenModal(false)
    }
  }
  return (
    <>
      <div 
      className="modalOverlay"
      onClick={handleModalClose}
      >
        <div className="modalContainer"> 
          <h2 className="modalHeading">Create New Group</h2>
          <div className="formGroup">
            <label className="modalGrp">Group Name</label>
            <input
                type="text"
                className="modalText"
                name="grpName"
                placeholder="Enter your group name"
                onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label className="modalColor">Choose Colour</label>
            {color.map((color, index) => (
                <button
                className="colorButton"
                name="color"
                key={index}
                style={{
                    background: color,
                }}
                ></button>
            ))}
          </div>
          <button className="createGroup">Create</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
