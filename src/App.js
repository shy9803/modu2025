// import './App.css';
import React from "react";
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

import './css/base.css'; //기본서식
import './css/common.css'; //공통서식(헤더,푸터)

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
