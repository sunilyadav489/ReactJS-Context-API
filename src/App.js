import React , {useState} from 'react';
import Navigation from './components/Navigation';
import AuthContext from './context/AuthContext';
import './App.css';

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <AuthContext.Provider value={{
        isLoggedIn:auth,
        setLoggedIn:(val) => {
          setAuth(val);
        }
      }}>
        <header className="App-header">
          <h1>REACT JS Context API</h1>
          <Navigation/>
        </header>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
