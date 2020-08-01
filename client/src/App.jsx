import React from 'react';
import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import JobSearch from './components/JobSearch';

import './App.css';

const App = () => {
  // // const [serverMessage, setServerMessage] = useState('');

  // const fetchDemoData = () => {
  //   fetch('/api/demo')
  //     .then((response) => response.json())
  //     .then((data) => setServerMessage(data.message));
  // };

  // useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searchforjobs" component={JobSearch} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
