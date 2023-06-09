import App from '@/App';
import About from '@/views/Page3';
import Home from '@/views/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function baseRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Navigate to={`/home`} />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
