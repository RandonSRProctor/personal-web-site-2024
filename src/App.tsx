import { useState } from 'react';
import { Home } from './Components/Home/Home';
import { Landing } from './Components/Landing/Landing';

function App() {
  const [page, setPage] = useState<'Landing' | 'Home'>('Landing');
  return (
    <div className="w-screen h-screen">
      {/* This is where I put max-w-7xl */}
      <div className="">
        {page === 'Landing' ? <Landing setPage={setPage} /> : null}
        {page === 'Home' ? <Home /> : null}
      </div>
    </div>
  );
}

export default App;
