import { Routes, Route } from 'react-router-dom' // 👈
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Quiz from './pages/quiz';
import NotFound from './pages/404';

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/quizzes/:quizId' element={<Quiz/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
