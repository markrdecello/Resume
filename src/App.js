import React from 'react';
import Header from "./components/Header";
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";

const App = () => {
  //const infoComponents = infoData.map(item => <MyInfo key={item.id} info={item} />)

  return (
    <div>
      <Header />
      <MyInfo 
        info={{firstName: "Mark", lastName: "Decello", major: "Computer Science"}}
      />
      <Footer />
    </div>
  );
}

export default App;
