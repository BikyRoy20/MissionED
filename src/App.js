import React from 'react'
import Store from './Store.js'
import Classes from './Classes.js'
import Referral from './Referral.js'
import Pro from './Pro.js'
import Navbar from './Navbar.js'
import './Components/Fontawesomeicons.js'
import Footer from './Footer.js'

import './index.css'
import { Switch, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <div>
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={Store} />
        <Route exact path="/classes" component={Classes} />
        <Route exact path="/referral" component={Referral} />
        <Route exact path="/pro" component={Pro} />
        <Redirect to="/" />
       </Switch>
      
      
      <Footer />
      
      
     
      
      
     </div>
    

  );
}

export default App;
