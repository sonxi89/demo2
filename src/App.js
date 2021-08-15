import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Button>Hello</Button>
      </div>
  );
}

export default App;
