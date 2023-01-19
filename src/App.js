import Navbar from './components/Layout/Navbar';
import WelcomeSection from './components/Layout/WelcomeSection';
import AboutSection from './components/Layout/AboutSection';
import AllProducts from './components/Products/AllProducts';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';
import { useCallback, useState, useMemo } from 'react';

function App() {
  const [container, setContainer] = useState('');

  const containerNode = useMemo(() => container, [container]);
  const productsContainer = useCallback(container => {
    setContainer(container);
  }, []);

  return (
    <CartContextProvider>
      <Navbar />
      <WelcomeSection productsContainer={containerNode} />
      <AboutSection />
      <AllProducts productsContainer={productsContainer} />
      <Cart />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
