import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '../componentsCSS/App.css';

import OrientationWarning from "../componentsJSX/OrientationWarning";
import Intro from "../componentsJSX/Intro";
import CharacterSelect from "../componentsJSX/CharacterSelect";
import TabletGuide from "../componentsJSX/TabletGuide";


function App() {
  return (
    <div className="App">
      <Router>
        <OrientationWarning />
        <img
          src={`${process.env.PUBLIC_URL}/assests/imgs/logos/main-logo.png`}
          alt="main-logo"
          className="main-logo"
        />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/characterSelect" element={<CharacterSelect />} />
          <Route path="/tabletGuide" element={<TabletGuide />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
