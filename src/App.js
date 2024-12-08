import logo from './logo.svg';
import './App.css';
import Navbar from './en/components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import enApp from './en/enApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
