import './App.css';

import React, { useState } from 'react'
import NabBar from './components/NabBar';
import News from './components/News';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {

  const pageSize = 9;
  const ApiKey = process.env.REACT_APP_API_KEY;
  const [progressbar, setprogressbar] = useState(0);
  const [gettotalResults, setgettotalResults] = useState(0);

  
    return (
      <div> 
        <LoadingBar
        color='#f11946'
        height={4}
        progress={progressbar}
        onLoaderFinished={() => 1000}
        />         
          <NabBar totalResults={gettotalResults}/>
          <Router>
            <Routes>
              <Route exact path="/" element={<News ApiKey={ApiKey} getTotalResults={setgettotalResults} pageSize={pageSize} country={'us'} category={'general'} setProgress={setprogressbar}/>}/>
              <Route exact path="/business" element={<News ApiKey={ApiKey} getTotalResults={setgettotalResults} pageSize={pageSize} country={'us'} category={'business'} setProgress={setprogressbar}/>}/>
              <Route exact path="/entertainment" element={<News ApiKey={ApiKey} getTotalResults={setgettotalResults} pageSize={pageSize} country={'us'} category={'entertainment'} setProgress={setprogressbar}/>}/>
              <Route exact path="/general" element={<News ApiKey={ApiKey} getTotalResults={setgettotalResults} pageSize={pageSize} country={'us'} category={'general'} setProgress={setprogressbar}/>}/>
              <Route exact path="/health" element={<News ApiKey={ApiKey} getTotalResults={setgettotalResults} pageSize={pageSize} country={'us'} category={'health'} setProgress={setprogressbar}/>}/>
              <Route exact path="/science" element={<News ApiKey={ApiKey} getTotalResults={setgettotalResults} pageSize={pageSize} country={'us'} category={'science'} setProgress={setprogressbar}/>}/>
              <Route exact path="/sports" element={<News ApiKey={ApiKey} getTotalResults={setgettotalResults} pageSize={pageSize} country={'us'} category={'sports'} setProgress={setprogressbar}/>}/>
              <Route exact path="/technology" element={<News ApiKey={ApiKey} getTotalResults={setgettotalResults} pageSize={pageSize} country={'us'} category={'technology'} setProgress={setprogressbar}/>}/>
          </Routes>
        </Router>  
        <Footer/>
      </div>
    )
  
    
}

export default App;