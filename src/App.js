import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero'
// import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <div className="App">
        {/* <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section> */}

       <Sidebar />
      <main className="main-content">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
         <section id="resume"><Resume /></section>
        {/* <section id="testimonials"><Testimonials /></section> */}
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
