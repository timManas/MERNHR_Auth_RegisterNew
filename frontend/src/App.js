import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.js'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductScreen from './screens/ProductScreen.js'
import LoginScreen from './screens/LoginScreen.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/login' component={LoginScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
