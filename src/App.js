import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Project from "./components/Project/project";
import Experience from "./components/Experience/experience";
import "./App.css";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Intro from "./components/intro/intro";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="toastBody"
      />
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
