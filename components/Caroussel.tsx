


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
                    <img className="d-block w-100" src="\chalet.JPG" width="600" height="399" alt="..." />
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src="\pisteski1.JPG" width="600" height="399" alt="..." />
                </div>


                <div className="carousel-item">
                    <img className="d-block w-100" src="\terrasselum.JPG" width="600" height="399" alt="..." />
                </div>


                <div className="carousel-item">
                    <img className="d-block w-50" src="\pisteski1.JPG" width="600" height="399" alt="..." />
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