import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Navbar dark color="primary" sticky="top" expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={ClubLogo} alt="logo" />
                    </NavbarBrand>
                </Container>
            </Navbar> */}
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
            <Footer />
        </div>
    );
}

export default App;
