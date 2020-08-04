import React from 'react';
import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import JobSearch from './components/JobSearch';
import Footer from './components/Footer';
// import gottech from "./assets/images/gottech.png";
import './App.css';
import './assets/styles/resources.css';

const App = () => {

  return (
   <>
    <AppContextProvider>
      <BrowserRouter>
      {/* <a href="#">&#9776; React-Bootstrap
          <img src={gottech} style={{width:100, marginTop: -7}} />
          </a> */}
      
       <NavigationBar />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searchforjobs" component={JobSearch} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
    </>
  );
};

export default App;
