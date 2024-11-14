import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Contact from '../views/Contact'; // Se till att detta stämmer
import Home from '../views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
