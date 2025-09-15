import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '../componentsCSS/App.css';

import OrientationWarning from "../componentsJSX/OrientationWarning";
import Intro from "../componentsJSX/Intro";
import CharacterSelect from "../componentsJSX/CharacterSelect";

function App() {
  return (
    <div className="App">
      <Router>
        <OrientationWarning />

        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/characterSelect" element={<CharacterSelect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
