import Home from './home';
import NavbarComponent from './navbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <main>
        <CarouselComponent />
        <Home />
        <FooterComponent />
      </main>
    </div>
  );
}

export default App;
