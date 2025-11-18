
// src/App.js
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education"
import Experience from "./components/Experience"
import Contact from "./components/Contact";
import TopSection from "./components/TopSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TopSection />
        <AboutMe />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;


