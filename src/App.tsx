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
      <Route path="Apps" element={<Apps />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Career" element={<Career />} />
      <Route path="RAD" element={<RAD />} />
    </Routes>
  );
}

export default App;
