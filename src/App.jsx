import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>

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
