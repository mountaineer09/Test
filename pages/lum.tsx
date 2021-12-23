import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

const Lum = () => {
    return (
        <div>
            <Navbar></Navbar><br />
            <div className="container">
                <div className="card width: 3rem;">
                    <Image className="card__image" src="/unsplash.jpg" width='300px' height='300px' alt='ok' />
                    <div className="card-body">
                        <p className="card-text">Capacité :	Jusqu'à 65 couchages
                            Composition :	1000 m² - Grand chalet de 17 chambres, 11 salles d'eau, 8 WC,
                            une salle à manger d'une capacité de 100 personnes avec grande cheminée,
                            cuisine professionnelle aux normes,
                            salle de réunion,
                            salle de ping-pong.
                            Les chambres :
                            6 chambres de 2 lits,
                            1 chambre à 3 lits,
                            5 chambres à 4 lits,
                            4 chambres à 6 lits,
                            1 chambre à 6 lits au rez-de-chaussée dont 4 pour personnes à mobilité réduite et comprenant aussi des sanitaires (WC et douche) adaptés
                            Détail couchage :	lits simples - lits superposés - 1 lit bébé
                            Location :	Semaine / Week-end / Nuitée
                            Formule(s) :	Demi-Pension / Pens. compl. / Pt déj. / Gestion libre
                            Ouverture :	Ouvert toute l'année
                            Agrément :	Jeunesse et Sports
                            Education Nationale</p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
}

export default Lum;