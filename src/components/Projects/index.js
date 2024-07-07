import Loader from 'react-loaders';
import Card from './ProjectCard';
import './index.scss';

function Projects(props) {
    const {project1, project2}= props.descriptions;
    //console.log(project1);

    return (
        <>
            <div className='cards-grid'>
                <Card title = {project1.title} image={project1.image1} description={project1.description1} route={project1.route}/>
                <Card title = {project2.title} image={project2.image1} description={project2.description1} route={project2.route}/>
                {/* <Card title = {project1.title} image={project1.image} description={project1.description}/>
                <Card title = {project1.title} image={project1.image} description={project1.description}/> */}
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Projects;