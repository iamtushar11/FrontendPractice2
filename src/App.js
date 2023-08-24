import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
