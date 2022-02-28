import './App.css';
import Home from './pages/Home/Home';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
