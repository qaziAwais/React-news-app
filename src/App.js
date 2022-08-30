import './App.css'
import NavBar from './components/NavBar'
import React, { Component } from 'react'
import News from './components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      progress:10
    }
  }
 setProgress=(progress)=>{
  this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress} height={2}/>
          <Routes>
            <Route path="/" element={<News giveProgress={this.setProgress} category="general"  title="general"/>} />
            <Route
              exact
              path="/entertainment"
              element={<News giveProgress={this.setProgress} category="entertainment" title="entertainment" />}
            />
            <Route
              path="/BUSINESS"
              element={<News giveProgress={this.setProgress} key="business" category="business" title="business" />}
            />
            <Route
              path="/GENERAL"
              element={<News giveProgress={this.setProgress} key="general" category="general"  title="local"/>}
            />
            <Route
              path="/HEALTH"
              element={<News giveProgress={this.setProgress} key="health" category="health"  title="foloo"/>}
            />
            <Route
              path="/SCIENCE"
              element={<News giveProgress={this.setProgress} key="science" category="science"  title="science"/>}
            />
            <Route
              path="/SPORTS"
              element={<News giveProgress={this.setProgress} key="sports" category="sports"  title="sports"/>}
            />
            <Route
              path="/TECHNOLOGY"
              element={<News giveProgress={this.setProgress} key="technology" category="technology" title="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
