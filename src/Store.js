import React from 'react'
import Deals from './Components/Deals.js'
import Feedback from './Components/Feedback.js'
import Newsletter from './Newsletter.js'

function Store() {
  return (
    <div>
      <section className="firstsection">
        <div className="box">
          <div className="firsthalf">
            <img className="logo-img" src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg" alt="logo" />
            <h1 className="store-head">MissionEd Store</h1>
            <p className="store-para">The one stop shop for all students of India <br />
              Trusted by <span className="pspan">2500+ students</span>
            </p>
            <div className="buttons">
              <a href="#deals" className="btn-sub">Start Shopping</a>
              <a href="/pro" className="btn-sub">MissionEd Pro <span class="badge badge-danger">New</span></a>
            </div>
          </div>
          <div className="secondhalf">
            <img src="https://thumbs.dreamstime.com/b/online-education-distance-learning-students-e-concept-people-studying-laptops-tablets-vector-illustration-student-170596600.jpg"
              alt="pic" />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="violet" fill-opacity="1" d="M0,224L48,186.7C96,149,192,75,288,58.7C384,43,480,85,576,117.3C672,149,768,171,864,154.7C960,139,1056,85,1152,58.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </section>
      <div>
     </div>

     <Deals />
     <Feedback />
     <Newsletter />

      
      </div>

     

      






      );
}

      export default Store;