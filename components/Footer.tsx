import Image from 'next/image';

const Footer = () => {
    return (
        <div className="card-footer text-muted">


            <div className="col">
                <p>
                    <span className="material-icons-outlined">
                        <img src="https://img.icons8.com/fluency/24/000000/map-marker.png" />
                    </span><br />
                    Les Monts d'Olmes<br />
                    09300 Montferrier<br />

                </p>
                <div className="col">
                    <p>
                        <span className="material-icons-outlined">
                            <img src="https://img.icons8.com/fluency/24/000000/phone.png" />
                        </span><br />
                        05.61.01.06.76 / 06.74.19.16.92<br />
                    </p>
                </div>
                <div className="col">
                    <p>
                        <span className="material-icons-outlined">
                            <img src="https://img.icons8.com/fluency/24/000000/filled-sent.png" /><br />
                        </span><br />
                        contact@lum-damont.com
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;