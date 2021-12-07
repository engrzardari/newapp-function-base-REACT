import './App.css';

import React, { Component } from 'react'
import NabBar from './components/NabBar';
import News from './components/News';
import Spinner from './components/Spinner';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 9;
  ApiKey = process.env.REACT_APP_API_KEY;
  
  state ={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({
      progress : progress,
    })
  }



  // Now Working
  getTotalResults = (totalResults)=>{
    this.setState({
      totalResultsRecords : totalResults,
    })
  }

  render() {
    return (
      <div> 
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        onLoaderFinished={() => 1000}
        />         
          <NabBar totalResults={this.state.totalResultsRecords}/>
          <Router>
            <Routes>
              <Route exact path="/" element={<News ApiKey={this.ApiKey} getTotalResults={this.getTotalResults} pageSize={this.pageSize} country={'us'} category={'general'} setProgress={this.setProgress}/>}/>
              <Route exact path="/business" element={<News ApiKey={this.ApiKey} getTotalResults={this.getTotalResults} pageSize={this.pageSize} country={'us'} category={'business'} setProgress={this.setProgress}/>}/>
              <Route exact path="/entertainment" element={<News ApiKey={this.ApiKey} getTotalResults={this.getTotalResults} pageSize={this.pageSize} country={'us'} category={'entertainment'} setProgress={this.setProgress}/>}/>
              <Route exact path="/general" element={<News ApiKey={this.ApiKey} getTotalResults={this.getTotalResults} pageSize={this.pageSize} country={'us'} category={'general'} setProgress={this.setProgress}/>}/>
              <Route exact path="/health" element={<News ApiKey={this.ApiKey} getTotalResults={this.getTotalResults} pageSize={this.pageSize} country={'us'} category={'health'} setProgress={this.setProgress}/>}/>
              <Route exact path="/science" element={<News ApiKey={this.ApiKey} getTotalResults={this.getTotalResults} pageSize={this.pageSize} country={'us'} category={'science'} setProgress={this.setProgress}/>}/>
              <Route exact path="/sports" element={<News ApiKey={this.ApiKey} getTotalResults={this.getTotalResults} pageSize={this.pageSize} country={'us'} category={'sports'} setProgress={this.setProgress}/>}/>
              <Route exact path="/technology" element={<News ApiKey={this.ApiKey} getTotalResults={this.getTotalResults} pageSize={this.pageSize} country={'us'} category={'technology'} setProgress={this.setProgress}/>}/>
          </Routes>
        </Router>  
        <Footer/>
      </div>
    )
  }
}