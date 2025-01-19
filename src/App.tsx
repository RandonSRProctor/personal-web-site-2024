import { RAD } from './Components/RAD/RAD';
import { Landing } from './Components/Landing/Landing';
import { Route, Routes } from 'react-router';
import { Career } from './Components/Career/Career';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="RAD" element={<RAD />} />
      <Route path="Career" element={<Career />} />
    </Routes>
  );
}

export default App;
