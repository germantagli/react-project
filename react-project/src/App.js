import './App.css';
import React from 'react';
import MenuComponent from './components/menu-component/menu-component';
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/home-page/home-page';
import UserPage from './pages/user-page/user-page';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';

function App() {
  return (
    <div>
    <div className="App">
      <div className="header-app">
        <MenuComponent />
      </div>
      <div className="body-app">
        <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/user">
              <UserPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
      </div>
      </div>
    </div>
  );
}

export default App;
