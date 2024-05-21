import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import GalleryPicture1 from './components/GalleryPicture1';
import GalleryPicture2 from './components/GalleryPicture2';
import GalleryPicture3 from './components/GalleryPicture3';
import GalleryPicture4 from './components/GalleryPicture4';
import GalleryPicture5 from './components/GalleryPicture5';
import GalleryPicture6 from './components/GalleryPicture6';
import GalleryPicture7 from './components/GalleryPicture7';
import GalleryPicture8 from './components/GalleryPicture8';
import GalleryPicture9 from './components/GalleryPicture9';
import GalleryPicture10 from './components/GalleryPicture10';

function App() {
  return (
    <Router>
      <Routes className="flex">
        <Route path="/galeria/1" element={ <GalleryPicture1 /> } />
        <Route path="/galeria/2" element={ <GalleryPicture2 /> } />
        <Route path="/galeria/3" Component={ GalleryPicture3 } />
        <Route path="/galeria/4" Component={ GalleryPicture4 } />
        <Route path="/galeria/5" Component={ GalleryPicture5 } />
        <Route path="/galeria/6" Component={ GalleryPicture6 } />
        <Route path="/galeria/7" Component={ GalleryPicture7 } />
        <Route path="/galeria/8" Component={ GalleryPicture8 } />
        <Route path="/galeria/9" Component={ GalleryPicture9 } />
        <Route path="/galeria/10" Component={ GalleryPicture10 } />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
