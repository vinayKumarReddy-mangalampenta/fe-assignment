import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes, RedirectFunction, Navigate } from 'react-router-dom';
import Reports from './components/Reports/Reports';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<Home />} />
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
