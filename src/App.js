import Navbar from './components/Layout/Navbar';
import WelcomeSection from './components/Layout/WelcomeSection';
import AboutSection from './components/Layout/AboutSection';
import AllProducts from './components/Products/AllProducts';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';

function App() {
  return (
    <CartContextProvider>
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      <AllProducts />
      <Cart />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
