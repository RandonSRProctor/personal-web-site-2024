import { RAD } from './Components/RAD/RAD';
import { Landing } from './Components/Landing/Landing';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="RAD" element={<RAD />} />
    </Routes>
  );
}

export default App;
