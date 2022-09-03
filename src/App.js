/** @format */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeatilPage from './components/DetailPage';
import HomePage from './components/HomePage';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DeatilPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
