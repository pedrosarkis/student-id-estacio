import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import StudentIDCard from './pages/StudentIdPage';
import './App.css'
import InitialLoadingScreen from './components/Loading';
import SecondaryLoadingScreen from './components/LoadingSpinner'

function App() {
  const [loadingStage, setLoadingStage] = useState('initial');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loadingStage === 'initial') {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            setLoadingStage('secondary');
            return 100;
          }
          return prevProgress + 5;
        });
      }, 30);

      return () => clearInterval(timer);
    } else if (loadingStage === 'secondary') {
      const timer = setTimeout(() => {
        setLoadingStage('complete');
      }, 1100); 

      return () => clearTimeout(timer);
    }
  }, [loadingStage]);

  if (loadingStage === 'initial') {
    return <InitialLoadingScreen progress={progress} />;
  }

  if (loadingStage === 'secondary') {
    return <SecondaryLoadingScreen />;
  }

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