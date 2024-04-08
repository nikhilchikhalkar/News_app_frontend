import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import News from './Components/News';
import Navbar from './Components/Navbar';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<News/>}/>
      <Route path='/business' element={<News category="business"/>}/>
      <Route path='/entertainment' element={<News category="entertainment"/>}/>
      <Route path='/health' element={<News category="health"/>}/>
      <Route path='/science' element={<News category="science"/>}/>
      <Route path='/sports' element={<News category="sports"/>}/>
      <Route path='/technology' element={<News category="technology"/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
