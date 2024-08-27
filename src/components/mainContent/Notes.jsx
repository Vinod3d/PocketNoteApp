import "./notes.css";

const Notes = () => {
  return (
    <div className="container">
      <header className="header">
        <span className="initials">MN</span>
        <h1 className="title">My Notes</h1>
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
          rows="3"
          placeholder="Here’s the sample text for sample work"
        ></textarea>
      </div>
    </div>
  );
};

export default Notes;
