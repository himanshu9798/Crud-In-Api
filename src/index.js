import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Display from './component/Display';
import Add from './component/Add';
import Edit from './component/Edit';
import ApiExplanation from './component/ApiExplanation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
  <App></App>
  <Routes>
  <Route path="/" element={<ApiExplanation/>} ></Route>
    <Route path="/" element={<App/>}></Route>
    <Route path="/display" element={<Display/>}></Route>
    <Route path="/Add" element={<Add/>}></Route>
    <Route path="/edit/:id" element={<Edit />} />

    

  </Routes>
</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
