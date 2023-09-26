import { Link } from 'react-router-dom';
import '../Card/Card.css';

function Card({ title, desc, imgSrc, links, skills, isPreview }) {

    return (
        <section className="card-container">
            <div className='card-contents'>
                <h1 style={{ marginBottom: 0 }}>{title}</h1>
                {desc && (
                    <h3 className='position-text'>
                        {desc}
                    </h3>
                )}
                {links && (<ul className='projects-link'>
                    {
                        links?.map((res) => {
                            return <a key={res.link} href={res.link} target='_blank' rel='noreferrer'>
                                <li className='list-items'>
                                    {res.value}
                                </li>
                            </a>
                        })
                    }
                </ul>)
                }
                {skills && (<ul className='skill-items'>
                    {
                        skills?.map((res, index) => {
                            return (
                                <li key={index}>
                                    {res}
                                </li>
                            )
                        })
                    }
                </ul>)
                }
                <div className='resume-button'>
                    {isPreview && <Link to='/resume' className='link-text' target='_blank' rel='noreferrer'>Resume preview</Link>}
                </div>
            </div>
            {
                imgSrc &&
                (<img src={imgSrc} className='img-style' alt='eng-img' />)
            }
        </section >
    );
}

export default Card;
