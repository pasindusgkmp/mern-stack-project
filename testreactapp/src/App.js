
import {useNavigate} from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();




  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to web application</h1>
        <button class="users-button"onClick={() => navigate('/users')}>Users</button>

      </header>
    </div>
  );
}

export default App;
