import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">MyPortfolio</Link>
      <div className="nav-links">
        {isHome ? (
          <>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          <>
            <Link to="/#about">About</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#contact">Contact</Link>
          </>
        )}
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;