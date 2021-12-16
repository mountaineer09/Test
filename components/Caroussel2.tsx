const Caroussel2 = () => {
    return (
        <div className="container">


            <main>
                <div className="container">
                    <div className="carousel slide" id="main-carousel" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#main-carousel" data-slide-to="1"></li>
                            <li data-target="#main-carousel" data-slide-to="2"></li>
                            <li data-target="#main-carousel" data-slide-to="3"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src="\chalet.JPG" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Mountain</h1>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="\bathroom1.JPG" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Mountain</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit, numquam minus!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="\groupe.JPG" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Mountain</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit, numquam minus!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="\room1.JPG" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Mountain</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit, numquam minus!</p>
                                </div>
                            </div>
                        </div>

                        <a href="#main-carousel" className="carousel-control-prev" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="sr-only" aria-hidden="true">Prev</span>
                        </a>
                        <a href="#main-carousel" className="carousel-control-next" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="sr-only" aria-hidden="true">Next</span>
                        </a>
                    </div>
                </div> </main>


        </div>
    );
}

export default Caroussel2;