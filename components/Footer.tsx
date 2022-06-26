import Image from 'next/image';

const Footer = () => {
    let date = new Date();
    return (
        <div className="card-footer text-muted">

            {
                date.getDate()
            }

            <div className="col" style={{ display: "flex" }}>
                <p>
                    🏞️ Les Monts d'Olmes<br />
                    09300 Montferrier<br />

                </p>
                <div className="col">
                    <p>
                        📞 05.61.01.06.76 / 06.74.19.16.92<br />
                    </p>
                </div>
                <div className="col">
                    <p>
                        📡 contact@lum-damont.com
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;