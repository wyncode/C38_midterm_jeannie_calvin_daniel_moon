import React from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <NavigationBar/>
      <div id="demo">
        <h3>Hello from client/src/App.js</h3>
        <ContextDemo />
      </div>
    </AppContextProvider>
  );
};

export default App;
