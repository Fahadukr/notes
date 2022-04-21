import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Note from "./pages/Note";
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} exact />
            <Route path='/notes/' element={<Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/note/:noteId" element={<Note />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
