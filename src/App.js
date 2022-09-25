
import NavbarComponent from './navbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './carouselComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <main>
        <CarouselComponent />
      </main>
    </div>
  );
}

export default App;
