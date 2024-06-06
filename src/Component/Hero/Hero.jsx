import "./hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Img from "../../assets/khaledAssets/logohero.png";
import Instructor from "../../assets/khaledAssets/Group 10000150065.png";
import Student from "../../assets/khaledAssets/GGroup 1000015006.png";
import Video from "../../assets/khaledAssets/Group 10000150007.png";
import User from "../../assets/khaledAssets/Frame 67.png";

const Hero = () => {

    return (
        <section id="hero-k">
            <div className="container-k">
                <div className="left-k">
                    <h5>SUCCESSFUL COACHES ARE VISIONARIES</h5>
                    <p className="b-p-k">Good <span>coaching</span> is good teaching & nothing else.</p>
                    <div className="btns-k">
                        <button className="heroBtn-k">View Courses</button>
                        <button className="heroBtn2-k">Get a Free Consultation</button>
                    </div>
                    <form className="search-k">
                        <input id="search-k" type="search" placeholder="what do you want to learn today?" />
                        <button className="searchBtn-k" type="submit"><FontAwesomeIcon icon={faSearch} /> Search</button>
                    </form>
                </div>
                <div className="right-k">
                    <h4>Ronald Richards</h4>
                    <p className="text-k">In a coaching role, you ask the questions and rely more on your staff, who become the experts, to provide the information.</p>
                    <div className="stars-k">
                        <span>4.9</span>
                        <span className="awsomeIcons-k"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></span>
                    </div>
                </div>
                <div className="img-k">
                    <img src={Img} />
                </div>
            </div>
            <div className="cards-k">
                <div className="contain-k">
                    <div className="card-k">
                        <div className="pic-k">
                            <img width="50px" src={Instructor} />
                        </div>
                        <div className="info-k">
                            <h3>300</h3>
                            <p>Instructor</p>
                        </div>
                    </div>
                    <div className="card-k">
                        <div className="pic-k">
                            <img width="50px" src={Student} />
                        </div>
                        <div className="info-k">
                            <h3>20,000+</h3>
                            <p>Student</p>
                        </div>
                    </div>
                    <div className="card-k">
                        <div className="pic-k">
                            <img width="50px" src={Video} />
                        </div>
                        <div className="info-k">
                            <h3>10,000+</h3>
                            <p>Video</p>
                        </div>
                    </div>
                    <div className="card-k">
                        <div className="pic-k">
                            <img width="50px" src={User} />
                        </div>
                        <div className="info-k">
                            <h3>1,00,000+</h3>
                            <p>User’s</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
