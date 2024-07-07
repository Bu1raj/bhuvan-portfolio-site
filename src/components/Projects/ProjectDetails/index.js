import Loader from 'react-loaders';
import Carousel from '../../Carousel';
import './index.scss';

function ProjectDetails(props) {
    const {title, description1, description2, technologies, image1, image2, image3} = props.details;
    const images = [image1, image2, image3];
    return (
        <>
            <div className='container'>
                <div className='wrapper'>
                    <Carousel images={images}/>
                    <div className='description'>
                        <h1>{title}</h1>
                        <ul>
                            <li><p>{description1}</p></li>
                            <li><p>{description2}</p></li>
                            <li><p><strong>Technologies used</strong>: {technologies}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
        
    );
}
export default ProjectDetails;
