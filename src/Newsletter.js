import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { NavLink} from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
function Newsletter() {
    return (
        <div>
            <div className="news">
                <div className="subs">
                    <h1>Join our Newsletter</h1>
                </div>
                <div className="feedIn">
                    <input type="text" name="email" placeholder="Enter your email here..." />
                </div>
                <button className="btnc-r">SUBSCRIBE</button>
            </div>

            <svg className="desg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="violet" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,58.7C384,32,480,32,576,58.7C672,85,768,139,864,149.3C960,160,1056,128,1152,144C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>


            <section className="others">
                   <div className="quick">
                        <h1>Quick Links</h1>
                        <br />
                        <div className="links">
                        <NavLink className="lin" to="/store">Home</NavLink>
                        <NavLink className="lin"  to="/store">About Us</NavLink>
                        <NavLink className="lin"  to="/">Services</NavLink>
                        <br />
                        <br />
                        <NavLink className="lin"  to="/store">Careers</NavLink>
                        <NavLink className="lin"  to="/store">Terms of service</NavLink>
                        <NavLink className="lin"  to="/store">Privacy Policy</NavLink>
                        </div>
                    </div>
                    


                <div className="oth">
                    <h1 className="others-head">MissionEd</h1>
                    <p>Affiliated with Atal Incubation Center<br />Goa Institute of Management,India<br />
                    
                    </p>
                    <br />
                    <div className="mail">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <span className="mil" >missionediit@gmail.com</span>
                    </div>

                    <div className="icons">
                        <FontAwesomeIcon className="fas" icon={faFacebook} size='3x' />
                        <FontAwesomeIcon className="fas" icon={faTwitter} size='3x' />
                        <FontAwesomeIcon className="fas" icon={faLinkedin} size='3x' />
                    </div>
                    </div>
                   
            </section>

        </div>
    )
}

export default Newsletter