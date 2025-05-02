import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/404';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import './css/main.css';

/**
 * `App` is the root component of the application.
 * It handles top-level layout and client-side routing.
 * 
 * Routes:
 * - `/` renders the Home page.
 * - Any undefined path (`*`) renders the 404 Page Not Found component.
 * 
 * Common UI elements like Navbar and Footer persist across all routes.
 *
 * @component
 * @returns {JSX.Element} The main application layout and router.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
