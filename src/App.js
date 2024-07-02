import './App.css';
import Feedback from './components/feedback/feedback';
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import Header from './components/header/header';
import Home from './components/home/home'
import About from './components/about/about';
import Showcase from './components/showCase/showCase';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Feedback />
      <Showcase />  
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
