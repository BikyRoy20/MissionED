import React from 'react'


function Feedback() {
    return (
        <div>
            <form className="forms">
                <div class="feed">
                    <div className="feed-head">
                        <h1>
                            Feedback
                        </h1>
                        <p>Your Feedback is valuable to us!!</p>
                    </div>
                    <div className="part-one">
                        <input type="text" name="name" placeholder="Full Name" />
                        <input type="text" name="email" placeholder="Email-Id" />
                    </div>
                    <div className="part-two">
                        <input type="number" placeholder="Age" />
                        <input type="number" placeholder="Mobile Number" />
                    </div>
                    <div className="mesg">
                        <textarea type="text" placeholder="Message" />
                    </div>
                    <button className="btnc">SUBMIT</button>
                   
                    

                </div>
            </form>
        
        </div>
      
       
       




    )
}

export default Feedback