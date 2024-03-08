// Stats.jsx


import './stats.css';
import CountsImg from '../../components/stats/counts-img.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";

const Stats = () => {
 

  return (
    <div className="container flex-container">
      <div className="image-container">
        <img src={CountsImg} alt="Your Image" />
      </div>
      <div className="paragraphs-container">
        <h1 className="header">Happy Customers</h1>
        
          <div>
            <div className="first wide-container">
              <i className="bi bi-emoji-smile"></i>
              <p className="happy-clients"><strong>Happy Clients</strong></p>
              <i className="bi bi-journal-richtext"></i>
              <p className="projects"><strong>Projects</strong></p>
            </div>
          </div>
          <div>
            <div className="second wide-container">
              <i className="bi bi-clock"></i>
              <p className="experience"><strong>Years of experience</strong></p>
              <i className="bi bi-award"></i>
              <p className="awards"><strong>Awards</strong></p>
            </div>
          </div>
          {/* Add more slides as needed */}
       
      </div>
    </div>
  );
};

export default Stats;
