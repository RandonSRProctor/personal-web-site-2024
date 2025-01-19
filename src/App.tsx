import { RAD } from './Components/RAD/RAD';
import { Landing } from './Components/Landing/Landing';
import { Route, Routes } from 'react-router';
import { Career } from './Components/Career/Career';
import { Apps } from './Components/Apps/Apps';
import { Blog } from './Components/Blog/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="RAD" element={<RAD />} />
      <Route path="Career" element={<Career />} />
      <Route path="Apps" element={<Apps />} />
      <Route path="Blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
