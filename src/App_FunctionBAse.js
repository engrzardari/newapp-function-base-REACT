import './App.css';

import React, { Component,useState } from 'react'
import NabBar from './components/NabBar';
import News from './components/News';
import Spinner from './components/Spinner';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'


const App = ()=>{

  const pageSize = 9;
  const ApiKey = process.env.REACT_APP_API_KEY;
  const [progress, setprogress] = useState(10);
  const [totalrecords, settotalrecords] = useState(0);

  const setProgress= (progress)=>{
    setprogress(progress);
  }

  // Now Working
  const getTotalResults = (totalResults)=>{
    settotalrecords(totalResults);
  }

  
    return (
      <div> 
        <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        onLoaderFinished={() => 1000}
        />         
          <NabBar totalResults={totalrecords}/>
          <Router>
            <Routes>
              <Route exact path="/" element={<News ApiKey={ApiKey} getTotalResults={getTotalResults} pageSize={pageSize} country={'us'} category={'general'} setProgress={setProgress}/>}/>
              <Route exact path="/business" element={<News ApiKey={ApiKey} getTotalResults={getTotalResults} pageSize={pageSize} country={'us'} category={'business'} setProgress={setProgress}/>}/>
              <Route exact path="/entertainment" element={<News ApiKey={ApiKey} getTotalResults={getTotalResults} pageSize={pageSize} country={'us'} category={'entertainment'} setProgress={setProgress}/>}/>
              <Route exact path="/general" element={<News ApiKey={ApiKey} getTotalResults={getTotalResults} pageSize={pageSize} country={'us'} category={'general'} setProgress={setProgress}/>}/>
              <Route exact path="/health" element={<News ApiKey={ApiKey} getTotalResults={getTotalResults} pageSize={pageSize} country={'us'} category={'health'} setProgress={setProgress}/>}/>
              <Route exact path="/science" element={<News ApiKey={ApiKey} getTotalResults={getTotalResults} pageSize={pageSize} country={'us'} category={'science'} setProgress={setProgress}/>}/>
              <Route exact path="/sports" element={<News ApiKey={ApiKey} getTotalResults={getTotalResults} pageSize={pageSize} country={'us'} category={'sports'} setProgress={setProgress}/>}/>
              <Route exact path="/technology" element={<News ApiKey={ApiKey} getTotalResults={getTotalResults} pageSize={pageSize} country={'us'} category={'technology'} setProgress={setProgress}/>}/>
          </Routes>
        </Router>  
        <Footer/>
      </div>
    )

}

export default NabBar;