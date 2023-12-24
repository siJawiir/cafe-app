import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./navigation/MainLayout";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;
