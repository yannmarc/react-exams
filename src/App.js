import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  <BrowserRouter>
    <Router>
      <Route path='/my-component' element={<MyComponent />} />
      <Route path="/form" element={<Form />} />
      <Route path="/drop" element={<Form />} />
    </Router>
  </BrowserRouter>
}

export default App;
