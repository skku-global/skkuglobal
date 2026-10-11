// BrowserRouter watches the URL; Routes picks the matching Route.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';

function App() {
  return (
    <BrowserRouter>
      <Header />   {/* outside Routes, so it shows on every page */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          {/* path="*" matches anything else = 404 page */}
          <Route path="*" element={<h2 className="page">Page not found</h2>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
