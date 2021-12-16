import Image from 'next/image';

const Map = () => {
    return (
        <div className="container">

            <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title, text-center">Accès</h2>
                    <p className="card-text">Les Monts d’Olmes se situent à 1 h 30 de Toulouse et à 1 h de Carcassonne au dessus de Foix.<br /></p>
                </div>
            </div>

            <div id="mapWrapper"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2925.2794705429615!2d1.7376543509537796!3d42.84583177905495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1639499150453!5m2!1sen!2sfr" width="100%" height="350" allowFullScreen></iframe><br /><br />

                <p className="card-text"><Image src="https://img.icons8.com/officexs/16/000000/forward.png" width='100px' height='100px' alt="dommage pas de noeils pas de photos" />130 Km depuis la gare Toulouse Matabiau<br /></p>
                <p className="card-text"><Image src="https://img.icons8.com/officexs/16/000000/forward.png" width='100px' height='100px' alt="ok" />125 Km depuis l'aéroport Toulouse-Blagnac<br /></p>
                <p className="card-text"><Image src="https://img.icons8.com/officexs/16/000000/forward.png" width='100px' height='100px' alt="ok" />85 Km depuis Carcassonne via le réseau ASF<br /></p>
                <p className="card-text"><Image src="https://img.icons8.com/officexs/16/000000/forward.png" width='100px' height='100px' alt="ok" />72 Km depuis Castelnaudary via le rÃ©seau ASF<br /></p>
                <p className="card-text"><Image src="https://img.icons8.com/officexs/16/000000/forward.png" width='100px' height='100px' alt="ok" />20 Km depuis la station de bus de Lavelanet.<br /></p><br /><br />



            </div>
        </div >



    );
}

export default Map;



