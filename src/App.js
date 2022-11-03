import { useState, createContext } from 'react';  
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


export const UserContext = createContext(null);


function App() {
  const [user, setUser ] = useState(' corwin');
  return (
  <UserContext.Provider value={{user, setUser}} >
    <Header/>
    <Main />        
  </UserContext.Provider>
  );
}

export default App;
