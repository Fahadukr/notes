import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Note from "./pages/Note";
import About from './pages/About'

function App() {

  useEffect(() => {

    document.title = "Notes";

    window.scrollTo(0, 0);

    document.body.style.zoom = "130%";

  }, []);

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/notes/" />} />
            <Route path='/notes/' element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/note/:noteId" element={<Note />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
