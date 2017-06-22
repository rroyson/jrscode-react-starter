import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Form from './pages/form'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="pv2 ph4 bg-black-60 white-70 avenir">
            <h1>Training Video Manager</h1>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/videos/new" component={Form} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
