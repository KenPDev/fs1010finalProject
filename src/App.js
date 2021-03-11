import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Contact2 from './components/pages/Contact2'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'
import portfolioWork from './components/pages/portfolioWork'

function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact2" component={Contact2} />
          <Route exact path="/portfolioWork" component={portfolioWork} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/submissions">
            <Listing />
          </PrivateRoute>
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
