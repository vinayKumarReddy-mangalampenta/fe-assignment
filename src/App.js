import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Reports from './components/Reports/Reports';
import Map from './components/Map/Map';
import Navbar from './components/Navbar';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

function App() {
  return (
    <div className="App" >
      {/* include it here */}
      {/* <i >
        <b >
          <a href='/agents' >agents </a>
          <a href='/home' >Home map view</a>
        </b>
      </i> */}


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Map location={location} zoomLevel={17} />} />
          <Route exact path='/agents' element={<Home />} />
          <Route exact path="/reports" element={<Reports />} />

          {/* not found redirecting to homepage */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
