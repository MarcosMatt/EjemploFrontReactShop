import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Productos from "./pages/ProductosPage";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" Component={ Home } />
          <Route exact path="/Productos" Component={ Productos } />
      </Routes>
    </Router>
  );
};

export default App;
