import './App.css';
import FrontPage from './pages/FrontPage';
import {
  Routes,
  Route,
} from "react-router-dom";
import TimingLayout from './components/Movie Timings/TimingLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="Movie" element={<TimingLayout/>} />
      </Routes>
    </>
  );
}

export default App;
