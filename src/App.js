import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Task from './pages/Task';
import User from './pages/User';
import NewTask from './pages/NewTask';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<NewTask />} />
        <Route path='/create-task' element={<NewTask />} />
        <Route path='/tasks' element={<Task />} />
        <Route path='/users' element={<User />} />
      </Routes>
    </>
  );
}

export default App;
