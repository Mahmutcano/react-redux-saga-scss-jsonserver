

import {Navbar, Container, Nav} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { UnitList } from './components/UnitList';
import { UnitDetail } from './components/UnitDetail';
import { Home } from './components/Home';
import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand as={Link} to="/">Age Of Empires</Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/UnitList">Units</Nav.Link>
          <Nav.Link as={Link} to="/UnitDetail">Units Detail</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    <div>
      <Routes>
          <Route path="/UnitList" element={<UnitList/>}/>
          <Route path="/UnitDetail" element={<UnitDetail/>}/>
          <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
