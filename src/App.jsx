import { useState } from 'react';
import {Route, Routes, NavLink} from 'react-router-dom';

import './App.css'
import Home from './components/Home';
import Clubs from './components/Clubs';

function App() {
  
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to='./'>
                        <li >Home</li>
                    </NavLink>
                    <NavLink to='./clubs'>
                        <li >Clubs</li>
                    </NavLink>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path='/' element={ <Home />} />
                    <Route path='/clubs' element={ <Clubs />} />
                </Routes>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default App
