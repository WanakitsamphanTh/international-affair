import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'

const enApp = () => {
    return (
        <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
}

export default enApp;