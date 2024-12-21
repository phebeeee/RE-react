// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LabReportsSystem from "./pages/LabReportsSystem";
import UserRegistrationForm from "./pages/UserRegistrationForm";
import LoginPage from "./pages/LoginPage";
import UserGuide from "./pages/UserGuide";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LabReportsSystem />} />
        <Route path="/register" element={<UserRegistrationForm />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/user-guide" element={<UserGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
