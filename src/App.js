import React from 'react';
import Header from "./components/Header"
import MyInfo from "./components/MyInfo"
import Footer from "./components/Footer"

function App() {
  //const infoComponents = infoData.map(item => <MyInfo key={item.id} info={item} />)

  return (
    <div>
      <Header />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App;
