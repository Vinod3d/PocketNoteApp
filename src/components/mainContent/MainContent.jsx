import bannerImg from "../../assets/bannerImage.png";
import './mainContent.css'
import { MdLock } from "react-icons/md";

const MainContent = () => {
  return (
    <div className="bannerSection">
        <div className="hero">
            <img src={bannerImg} alt="" />
            <h2 className="bannerHeading">Pocket Notes</h2>
            <p className="bannerDescription">
                Send and receive messages without keeping your phone online.
                <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
        </div>
        <div className="footer">
            <MdLock/> end-to-end encrypted
        </div>
    </div>
  );
};

export default MainContent;
