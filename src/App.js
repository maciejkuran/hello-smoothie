import Navbar from './components/Layout/Navbar';
import WelcomeSection from './components/Layout/WelcomeSection';
import AboutSection from './components/Layout/AboutSection';
import AllProducts from './components/Products/AllProducts';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';
import { useCallback, useState } from 'react';

function App() {
  const [container, setContainer] = useState('');

  const productsContainer = useCallback(container => {
    setContainer(container);
  }, []);

  return (
    <CartContextProvider>
      <Navbar />
      <WelcomeSection productsContainer={container} />
      <AboutSection />
      <AllProducts productsContainer={productsContainer} />
      <Cart />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
