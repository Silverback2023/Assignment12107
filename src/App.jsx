import React from 'react';
import Header from './components/Header/Header.jsx';
import ShoeInfo from './components/ShoeInfo/ShoeInfo.jsx';
import Footer from './components/Footer/Footer.jsx';
import data from './data';

function App() {
  return (
    <div>
      <Header />

      <ShoeInfo data={data} />
      
      <Footer />
    </div>
  );
}

export default App;
