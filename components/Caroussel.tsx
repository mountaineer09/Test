import Image from 'next/image';


const Caroussel = () => {
    return (

        <div id="demo" className="carousel slide" data-bs-ride="carousel">


            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>

            </div>

            <div className="carousel-inner">

                <div className="carousel-item active">
                    <Image className="card__image" src="/unsplash2.jpg" width='300px' height='300px' alt='ok' />
                </div>

                <div className="carousel-item">
                    <Image className="card__image" src="/unsplash3.jpg" width='300px' height='300px' alt='ok' />
                </div>


                <div className="carousel-item">
                    <Image className="card__image" src="/unsplash4.jpg" width='300px' height='300px' alt='ok' />
                </div>


                <div className="carousel-item">
                    <Image className="card__image" src="/unsplash5.jpg" width='300px' height='300px' alt='ok' />
                </div>
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>


        </div >


    );
}

export default Caroussel;