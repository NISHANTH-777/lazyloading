import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul className='flex flex-row justify-between items-center  p-5 ml-6 mr-5 bg-yellow-300 '>
            <li><Link className=' font-extrabold' to="/">Home</Link></li>
            <li><Link className=' font-extrabold' to="/csk">CSK</Link></li>
            <li><Link className=' font-extrabold' to="/rcb">RCB</Link></li>
            <li><Link className=' font-extrabold' to="/mi">MI</Link></li>
            <li><Link className=' font-extrabold' to="/kkr">KKR</Link></li>
            <li><Link className=' font-extrabold' to="/srh">SRH</Link></li>
            <li><Link className=' font-extrabold' to="/dc">DC</Link></li>
            <li><Link className=' font-extrabold' to="/pbks">PBKS</Link></li>
            <li><Link className=' font-extrabold' to="/gt">GT</Link></li>
            <li><Link className=' font-extrabold' to="/lsg">LSG</Link></li>
            <li><Link className=' font-extrabold' to="/rr">RR</Link></li>
        </ul>
        </nav>
    
  );
};

export default Navbar;