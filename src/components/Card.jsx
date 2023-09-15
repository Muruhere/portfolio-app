import '../components/Card.css'

function Cards({ title, desc, imgSrc }) {

    let img;

    if (imgSrc)
        img = <img src={imgSrc} className='img-style' alt='eng-img' />

    return (
        <section className="card-container">
            <div className='card-contents'>
                <h1 style={{ marginBottom: 0 }}>{title}</h1>
                <h3 className='position-text'>
                    {desc}
                </h3>
            </div>
            {img}
        </section>
    );
}

export default Cards;
