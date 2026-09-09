import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Delivery from './components/Delivery';
import NotFound from './components/NotFound';
import Promotions from './components/Promotions';
import Jobs from './components/Jobs';
import News from './components/News';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import './styles/main.css';

const pageMetadata = {
  '/': ['Krusty Krab - Home', 'Serving for over 25 years, the Krusty Krab is Bikini Bottom\'s premier destination for mouthwatering underwater fast food.'],
  '/about': ['About Us - Krusty Krab', 'A detailed page of our restaurant\'s information.'],
  '/menu': ['Menu - Krusty Krab', 'Explore the Krusty Krab menu.'],
  '/promos': ['Promotions - Krusty Krab', 'Discounts, order sets, and more at the Krusty Krab.'],
  '/jobs': ['Jobs - Krusty Krab', 'Be a part of the Krusty Krew.'],
  '/news': ['Newsletter - Krusty Krab', 'Latest updates and news in one page.'],
  '/article1': ['Krusty Kruiser - Krusty Krab', 'The Krusty Kruiser brings the flavors of Bikini Bottom on the road.'],
  '/article2': ['Krusty Krab 2 - Krusty Krab', 'The grand reopening of the Krusty Krab 2.'],
  '/delivery': ['Complete Your Order - Krusty Krab', 'Complete your Krusty Krab delivery or pickup order.'],
};

const PageMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] || ['Error 404 - Krusty Krab', 'The page you are looking for does not exist.'];
    document.title = metadata[0];
    document.querySelector('meta[name="description"]').setAttribute('content', metadata[1]);
    document.querySelector('meta[name="keywords"]').setAttribute('content', 'krusty krab, spongebob, krabby patty, bikini bottom');
  }, [location.pathname]);
  return null;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <PageMetadata />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/promos" element={<Promotions />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/news" element={<News />} />
            <Route path="/article1" element={<Article1 />} />
            <Route path="/article2" element={<Article2 />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;