import Loader from 'react-loaders';
import Card from './ProjectCard';
import descriptions from './assets/descriptions';
import './index.scss';

function Projects() {
    const {project1, project2}= descriptions;
    console.log(project1);

    return (
        <>
            <div className='cards-grid'>
                <Card title = {project1.title} image={project1.image} description={project1.description}/>
                <Card title = {project2.title} image={project2.image} description={project2.description}/>
                {/* <Card title = {project1.title} image={project1.image} description={project1.description}/>
                <Card title = {project1.title} image={project1.image} description={project1.description}/> */}
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Projects;