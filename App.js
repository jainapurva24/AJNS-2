import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './components/View';
import Add from './components/Add';
import Navbar from './components/Navbar';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<View/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/:id' element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
