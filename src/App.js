import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {Routes, Route} from "react-router-dom"
import CourseGrid from './components/CourseGrid/CourseGrid';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cours" element={<CourseGrid/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
