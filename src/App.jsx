
import styles from './App.module.css'
import {Navbar} from './components/Navbar/Navbar'
import { Hero } from "./components/Hero/Hero";
import { About} from "./components/About/About";
import { Coursework } from './components/Coursework/Coursework';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact'

function App() {
 

  return (
    <div className = {styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Coursework />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
