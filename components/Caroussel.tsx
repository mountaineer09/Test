const Caroussel = () => {
    return (
        <div className="container">


            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-50" src="\chalet.JPG" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-50" src="\pisteski1.JPG" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-50" src="\pisteski2.JPG" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-50" src="\terrasselum.JPG" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-50" src="\foretneige.JPG" alt="..." />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Caroussel;