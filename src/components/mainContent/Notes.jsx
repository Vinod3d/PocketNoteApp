/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import WordIcon from "../WordIcon";
import "./notes.css";
import { IoMdSend } from "react-icons/io";
import formatDate from "../formatDate";
import { GoDotFill } from "react-icons/go";

const Notes = ({ selectedGroup }) => {
  const [input, setInput] = useState({
    text: "",
    timestamp: "",
  });
  const [storedNotes, setStoredNotes] = useState([]);

  const handleInputChange = (event) => {
    const currentTime = new Date().toLocaleString();
    setInput({
      text: event.target.value,
      timestamp: currentTime,
    });
  };

  const handleSubmitNotes = () => {
    if (!selectedGroup || !selectedGroup.groupName) return;
    const grpName = selectedGroup.groupName;
    const existingNotes = JSON.parse(localStorage.getItem(grpName)) || [];
    const updatedNotes = [...existingNotes, input];
    localStorage.setItem(grpName, JSON.stringify(updatedNotes));
    setStoredNotes(updatedNotes);
    setInput({ text: "", timestamp: "" });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
      handleSubmitNotes();
    }
  };

  useEffect(() => {
    if (selectedGroup && selectedGroup.groupName) {
      const grpName = selectedGroup.groupName;
      const notes = localStorage.getItem(grpName);
      if (notes) {
        setStoredNotes(JSON.parse(notes));
      } else {
        setStoredNotes([]);
      }
    }
  }, [selectedGroup]);

  return (
    <div className="container">
      <header className="header">
        <span
          className="groupIcon"
          style={{ backgroundColor: selectedGroup.color }}
        >
          <div className="Icon">
            <WordIcon groupName={selectedGroup.groupName} />
          </div>
        </span>
        <h1 className="groupName">{selectedGroup.groupName}</h1>
      </header>

      <div className="notes">
        {storedNotes.map((notes, index) => {
          const { date, time } = formatDate(notes.timestamp);
          return (
            <div className="note" key={index}>
              <p>{notes.text}</p>
              <span className="date">
                {date} <GoDotFill /> {time}
              </span>
            </div>
          );
        })}
      </div>

      <div className="textarea-container">
        <textarea
          className="textarea"
          value={input.text}
          placeholder="Enter your text here...."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button
          type="button"
          className="send-icon"
          style={{
            cursor: `${input.text === "" ? "not-allowed" : "pointer"}`,
            color: `${input.text === "" ? "#b9bbc0" : "#001f8b"}`,
          }}
          onClick={() => handleSubmitNotes()}
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Notes;
