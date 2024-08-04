import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import StudentIDCard from './pages/StudentIdPage';
import './App.css'

function App() {
  return (
    <Router>
      <div className="bg-blue-600 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/student-id" element={<StudentIDCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
