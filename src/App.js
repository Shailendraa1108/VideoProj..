
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Video from "./Components/Video";
import Upload from "./Components/Upload";
import Signup from "./Components/Signup";



function App() {
  return (
    <>
     <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Video />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>
        {/* <Footer /> */}
      </Router>



    </>

  );
}

export default App;
