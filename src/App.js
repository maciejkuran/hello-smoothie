import { Fragment } from 'react';

import Navbar from './components/Layout/Navbar';
import WelcomeSection from './components/Layout/WelcomeSection';
import AboutSection from './components/Layout/AboutSection';
import AllProducts from './components/Products/AllProducts';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      <AllProducts />
      <Footer />
    </Fragment>
  );
}

export default App;
