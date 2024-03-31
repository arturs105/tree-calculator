import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { TreeCalculator } from './tree-calculator/TreeCalculator';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TreeCalculator />} />
      </Routes>
    </Router>
  );
}
