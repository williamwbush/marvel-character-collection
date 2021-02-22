import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateCharacter, Characters, UpdateCharacter, Login} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav} from 'react-bootstrap';
import logo from './assets/img/marvel_banner.png';
import './styles.css'
import { FirebaseAppProvider, AuthCheck} from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';

render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Router>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            alt="Marvel Character API"
            src={logo}
            width="30"
            className="d-inline-block align-top"
          />{' '}
					<Link to="/">Marvel Character API</Link>
        </Navbar.Brand>
      <Nav className="move-nav" activeKey="/">
        
				<Nav.Item>
          <Nav.Link>
            <Link to='/'> Home </Link>
          </Nav.Link>
        </Nav.Item>

        <AuthCheck fallback={
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login Here</Link>
            </Nav.Link>
          </Nav.Item>
        }>

				<Nav.Item>
          <Nav.Link>
            <Link to='/characters'> Display Your Characters </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to='/login'>Logout</Link>
          </Nav.Link>
        </Nav.Item>

        </AuthCheck>

			</Nav>

      </Navbar>
      
			<Switch>
        <Route exact path="/">
          <Home title="{ A fast, reliable, and secure web-native API for tracking detailed Marvel character data }" />
        </Route>
        <Route path="/create">
          <CreateCharacter />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/update">
          <UpdateCharacter />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
