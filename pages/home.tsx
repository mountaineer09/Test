import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="swiper-container" data-effect="fade" data-autoplay="false">
                <div className="swiper-wrapper">

                    <div className="swiper-slide" >
                        <Image className="card__image" src="/unsplash.jpg" width='300px' height='300px' alt='ok' />
                        <div className="overlay dark-2"></div>

                        <div className="display-table">
                            <div className="display-table-cell vertical-align-middle">
                                <div className="container">

                                    <div className="row">
                                        <div className="text-center col-md-8 col-xs-12 offset-md-2">

                                            <h2 className="bold font-raleway wow fadeInUp" data-wow-delay="0.4s">BIENVENUE AU CHALET LUM D’AMONT houhou</h2>
                                            <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Le Chalet Lum d’Amont en Ariège est un chalet pouvent accueillir des groupes tout comme des familles</p><br />
                                            <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Dans un cadre privilégié au coeur des Pyrénées</p>
                                            <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Profitez d'un air pur et vivifiant dans un lieu chaleureux</p><br />


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default Home;