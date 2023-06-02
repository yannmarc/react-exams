import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MyComponent from './components/MyComponent';
import Form from './components/Form';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyComponent />} />
        <Route path='/form' element={<Form />} />
        <Route path='/dropdown' element={<Dropdown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
