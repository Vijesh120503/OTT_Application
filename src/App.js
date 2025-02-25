import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/content';
import Movies from './Components/movies';
import Shows from './Components/Shows';
import Kids from './Components/kids';
import Livetwo from './Components/LIVETWO';
import Vlc from './Components/live';
import Series from './Components/Series';
import Video from './Components/video';
import Stream from './Components/stream';
import Login from './Components/Login';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 Added Loading State
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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth State Changed:", currentUser);
      setUser(currentUser); // 🔹 Store full user object
      setLoading(false); // 🔹 Authentication process completed
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [user, location, navigate, loading]);

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
    await signOut(auth);
    setUser(null);
    navigate('/login');
  };

  if (loading) return <div>Loading...</div>; // 🔹 Show loading state while Firebase checks auth

  return (
    <div>
      {user ? (
        <>
          <Navbar onNavClick={handleNavClick} username={user.displayName || "User"} onLogout={handleLogout} />
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
            <Route path="/TV" element={<Livetwo />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Shows" element={<Shows />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Video-Songs" element={<Video />} />
            <Route path="/Sports" element={<Stream />} />
            <Route path="/Mobile" element={<Vlc />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
