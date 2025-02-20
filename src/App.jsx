import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


const Rcb = React.lazy(() => import('./pages/Rcb'));
const Mi = React.lazy(() => import('./pages/Mi'));
const Srh = React.lazy(() => import('./pages/Srh'));
const Kkr = React.lazy(() => import('./pages/Kkr'));
const Rr = React.lazy(() => import('./pages/Rr'));
const Pbks = React.lazy(() => import('./pages/Pbks'));
const Lsg = React.lazy(() => import('./pages/Lsg'));
const Gt = React.lazy(() => import('./pages/Gt'));
const Dc = React.lazy(() => import('./pages/Dc'));
const Csk = React.lazy(() => import('./pages/Csk'));
const Home = React.lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense  fallback={<div className='text-center p-10 font-thin text-yellow-400'>Wait For See Your Team ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/csk" element={<Csk />} />
          <Route path="/rcb" element={<Rcb />} />
          <Route path="/mi" element={<Mi />} />
          <Route path="/srh" element={<Srh />} />
          <Route path="/kkr" element={<Kkr />} />
          <Route path="/rr" element={<Rr />} />
          <Route path="/pbks" element={<Pbks />} />
          <Route path="/lsg" element={<Lsg />} />
          <Route path="/gt" element={<Gt />} />
          <Route path="/dc" element={<Dc />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
