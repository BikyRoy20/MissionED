import React from 'react'
import Feedback from './Components/Feedback.js'
import Newsletter from './Newsletter.js'
function Classes() {
  return (
    <div>
      <section className="firstsection">
        <div className="box">
          <div className="firsthalf">
            <img className="logo-img" src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg" alt="logo" />
            <h1 className="store-head">MissionEd Classes</h1>
            <p className="store-para">Get the best classes!!  <br />
              By the best Faculty members of the Country
            </p>
          </div>
          <div className="secondhalf">
            <img src="https://files.muzli.space/815d4783cb26eab27794e08604d403d9.webp"
              alt="pic" />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="violet" fill-opacity="1" d="M0,224L48,186.7C96,149,192,75,288,58.7C384,43,480,85,576,117.3C672,149,768,171,864,154.7C960,139,1056,85,1152,58.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </section>

      <section>


        <div className="headsec">
          <h1>Our Courses</h1>  <br />  <br /> <br />
         </div>

        <div className="cds">
          <div className="image">
            <img className="imgs" src="https://reimargroup.com/wp-content/uploads/2015/12/resized-lightbulb.jpg" alt="imgh" />
          </div>
          <div className="title">
          <h1>Entrepreneurship</h1>
          </div>
          <div className="des">
            <button>See Courses</button>
          </div>
        </div>

        <div className="cds">
          <div className="image">
            <img className="imgs" src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f1e55e18ba283c9ad86684a%2F0x0.jpg" alt="imgh" />
          </div>
          <div className="title">
           <h1>Finance</h1>
          </div>
          <div className="des">
            <button>See Courses</button>
          </div>
        </div>

        <div className="cds">
          <div className="image">
            <img className="imgs" src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2020/06/iStock-1221293664-1.jpg" alt="imgh" />
          </div>
          <div className="title">
            <h1>Data Science</h1>
          </div>
          <div className="des">
            <button>See Courses</button>
          </div>
          </div>

          <div className="cds">
            <div className="image">
              <img className="imgs" src="https://cdn.merchantmaverick.com/wp-content/uploads/2019/04/bigstock-Consulting-With-Business-Woman-263118775.jpg" alt="imgh" />
            </div>
            <div className="title">
              <h1>Consulting</h1>
            </div>
            <div className="des">
              <button>See Courses</button>
            </div>
          </div>  <br /> <br />  <br /> <br /> <br />
          
          </section>
    
       <section>
       <div className="headsec">
          <h1>Alma Mater Of Our Faculty Members</h1>
        </div>
        <br /> <br />  

       <div className="cds">
         
         <div className="image">
            <img className="imgs" src="https://www.cse.iitb.ac.in/~pavansaiveti/iitb_logo.jpg" alt="imgh" />
          </div>
          <div className="title">
               <h1>IIT BOMBAY</h1>
          </div>
        </div>

        <div className="cds">
          <div className="image">
            <img className="imgs" src="https://media-exp3.licdn.com/dms/image/C4E0BAQHbYxMF7lBoDg/company-logo_200_200/0/1519903236384?e=2159024400&v=beta&t=VSQhjApSaorc2gfNzu4r7Up2n-Y0pLk4JKl0pOGtPvA" alt="imgh" /> 
            </div>
               <div className="title">
               <h1>IIT KHARAGPUR</h1>
          </div>
        </div>

        <div className="cds">
          <div className="image">
            <img className="imgs" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png" alt="imgh" />
          </div>
          <div className="title">
               <h1>IIT KANPUR</h1>
          </div>
        </div>

        <div className="cds">
          <div className="image">
            <img className="imgs" src="https://upload.wikimedia.org/wikipedia/sa/6/66/IIT_Delhi_logo.png" alt="imgh" />
          </div>
          <div className="title">
               <h1>IIT DELHI</h1>
          </div>
        </div>

       </section> <br /> <br />  <br />

       <Feedback />
      <Newsletter />

    </div>

  );
}

export default Classes;