/* eslint-disable react/prop-types */
import { useState } from "react";
import WordIcon from "../WordIcon";
import "./notes.css";
import { IoMdSend } from "react-icons/io";

const Notes = ({selectedGroup, setNotes}) => {
  const [input, setInput] = useState({
    text: "",
    timestamp: "",
  });

  const handleInputChange = (event) => {
    const currentTime = new Date().toLocaleString();
    setInput({
      text: event.target.value,
      timestamp: currentTime,
    });
  };

  const handleSubmitNotes = ()=>{
    setNotes(input)
    setInput({text:"", timestamp:""})
  }

  return (
    <div className="container">
      <header className="header">
        <span className="groupIcon" style={{backgroundColor: selectedGroup.color}}>
          <div className="Icon">
            <WordIcon groupName={selectedGroup.groupName}/>
          </div>
        </span>
        <h1 className="groupName">{selectedGroup.groupName}</h1>
      </header>

      <div className="notes">
        <div className="note">
          <p>
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their days writing projects, words are
            already flowing from their fingers.
          </p>
          <span className="date">9 Mar 2023 ● 10:10 AM</span>
        </div>

        <div className="note">
          <p>
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their days writing projects, words are
            already flowing from their fingers.
          </p>
          <span className="date">9 Mar 2023 ● 10:10 AM</span>
        </div>
      </div>

      <div className="textarea-container">
        <textarea
          className="textarea"
          value={input.text}
          placeholder="Enter your text here...."
          onChange={handleInputChange}
        ></textarea>
        <button 
          type="button" 
          className="send-icon"
          style={{
            cursor : `${input.text === "" ? 'not-allowed' : 'pointer'}`,
            color : `${input.text === "" ? '#b9bbc0' : '#001f8b'}`
          }}
          onClick={()=>handleSubmitNotes()}
        >
          <IoMdSend  disable/>
        </button>
      </div>
    </div>
  );
};

export default Notes;
