import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
 

import Header from "./Header.js";
import MainComponent from "./MainComponent.js";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Emailenvio from "./Emailenvio";


function App () {
return (
   <Router>
      <div>
         <Switch>
            <Route path={["/dashboard"]} children={<Dashboard />} />
            <Route path={["/Emailenvio"]} children={<Emailenvio />} />
            <Route path="/" children={
               <div>
                  <Header />
                  <MainComponent />
                  <Footer />
               </div>
            } />
         </Switch>
      </div>
   </Router>
);
}

export default App;