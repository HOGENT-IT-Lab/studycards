import { Routes, Route } from 'react-router-dom' // 👈
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Quiz from './pages/quiz';
import NotFound from './pages/404';
import NavBar from './components/navbar';

function App() {
  return (
    <Routes>
      <Route index element={<><NavBar/><Home/></>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/quizzes/:quizId' element={<><NavBar/><Quiz/></>}/>
      <Route path='*' element={<><NavBar/><NotFound/></>}/>
    </Routes>
  );
}

export default App;
