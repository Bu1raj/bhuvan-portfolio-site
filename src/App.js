import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';
import projectsInfo from './assets/projects/descriptions.js'

function App() {
  const {project1, project2}= projectsInfo;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mywork" element={<Projects descriptions={projectsInfo}/>} />
          <Route path="sign-language-recognition" element={<ProjectDetails details={project1}/>} />
          <Route path="flutter-scms" element={<ProjectDetails details={project2}/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
