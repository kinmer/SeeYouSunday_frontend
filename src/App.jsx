import { Route, Routes, NavLink } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Clubs from './pages/Clubs';

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to="./">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="./clubs">
                        <li>Clubs</li>
                    </NavLink>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clubs" element={<Clubs />} />
                </Routes>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
