import react, {useState} from 'react';
import './App.css';
import Login from './pages/Login';
import Homepage from './pages/HomePage';

function App() {

  const [authToken, setAuthToken] = useState(null);

  return (
    <div className="App">      
      {
        authToken ? (
          <Homepage />
        ) : (
          <Login setAuthToken = {setAuthToken}/>
        )
      }
    </div>
  );
}

export default App;




