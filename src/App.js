import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/content';
import Movies from './Components/movies';
import Shows from './Components/Shows';
import Kids from './Components/kids';
import Livetwo from './Components/live';
import Series from './Components/Series';
import Video from './Components/video';
import Stream from './Components/stream';
import Login from './Components/Login'; // 🔹 Added Login Component
import { auth } from './firebase'; // 🔹 Firebase Auth
import { onAuthStateChanged, signOut } from 'firebase/auth'; // 🔹 Firebase Methods

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [user, setUser] = useState(null); // 🔹 User State
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    } else if (location.pathname === '/Albums') {
      window.location.href = 'https://shadow-music.netlify.app/';
    }
  }, [location, navigate]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.displayName || 'User'); // 🔹 Get Username
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user && location.pathname !== '/login') {
      navigate('/login'); // 🔹 Redirect to Login if not logged in
    }
  }, [user, location, navigate]);

  const handleNavClick = (component) => {
    if (component === 'Albums') {
      window.location.href = 'https://shadow-music.netlify.app/';
    } else {
      navigate(`/${component}`);
    }
  };

  const handleSongChange = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleAudioChange = (audio) => {
    setCurrentAudio(audio);
  };

  const togglePlayPause = () => {
    if (currentAudio) {
      isPlaying ? currentAudio.pause() : currentAudio.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleLogout = async () => {
    await signOut(auth); // 🔹 Logout function
    navigate('/login');
  };

  return (
    <div>
      {user ? (
        <>
          <Navbar onNavClick={handleNavClick} username={user} onLogout={handleLogout} /> {/* 🔹 Updated Navbar */}
          <Routes>
            <Route path="/home" element={
              <>
                <Home 
                  onNavClick={handleNavClick} 
                  onSongChange={handleSongChange} 
                  onAudioChange={handleAudioChange} 
                />
                {currentSong && currentSong.image && (
                  <div className="songg">
                    <h3>Now Playing</h3>
                    <img src={currentSong.image} alt={currentSong.name} /><br />
                    <button onClick={togglePlayPause} className="player-button">
                      {isPlaying ? 'Pause' : 'Play'}
                    </button>
                  </div>
                )}
              </>
            } />
            <Route path="TV" element={<Livetwo />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Shows" element={<Shows />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/VideoSongs" element={<Video />} />
            <Route path="/Sports" element={<Stream />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} /> {/* 🔹 Login Route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
