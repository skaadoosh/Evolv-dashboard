import './App.css';
import userData from './seed';
import DashBoard from './DashBoard';
import { Routes, Route } from 'react-router-dom';
import Workout from './Workout';
import Nutrition from './Nutrition'


function App() {
  const users = JSON.parse(userData)
  return (
    <div className="App">
      <Routes>
        <Route path='/:userId/workout' element={<Workout users={users} />} />
        <Route path='/:userId/nutrition' element={<Nutrition users={users} />} />
        <Route path='/' element={<DashBoard users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
