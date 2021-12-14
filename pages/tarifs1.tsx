import Navbar from "../components/Navbar";
import Image from 'next/image';

const Tarifs1 = () => {
    return (

        <div className="container">

            <div className="row">
                <div className="col">
                    <p>Pour toute demande d'information ou questions, vous pouvez nous contacter à l'adresse contact@lum-damont.com</p><br />
                    <span>Télécharger le bulletin d'inscription</span><br />
                    <p><strong>Conditions de réservation:</strong><br />
                        - Bons CAF et Chèques vacances acceptés<br />
                        - Cotisation annuelle obligatoire de 1.00 euro par adulte ou de 15.00 euros par groupe constitué<br />
                        - Ne sont prises en compte uniquement les réservations accompagnées d'un acompte de 25,00% du montant total arrondi à l'euro supérieur<br />
                        - Les tarifs indiqués ne comprennent pas la taxe de séjour qui est calculée sur la base des règles en vigueur<br />
                        - Une caution de 300,00 euros est demandée en début séjour et encaissée seulement en cas de dégâts<br />
                    </p>
                </div>
                <div className="col">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-center">Tarifs famille</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td colSpan={2} className="text-center">Pension complète</td>
                            </tr>

                            <tr>
                                <td className="text-center">Adultes</td>
                                <td className="text-center">47,00 &euro;</td>
                            </tr>

                            <tr>
                                <td className="text-center">Enfants de moins de 13 ans</td>
                                <td className="text-center">37,00 &euro;</td>
                            </tr>
                            <tr>
                                <td className="text-center">Enfants de moins de 5 ans</td>
                                <td className="text-center">Gratuit</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-center">Demi pension</td>
                            </tr>

                            <tr>
                                <td className="text-center">Adultes</td>
                                <td className="text-center">42,00 &euro;</td>
                            </tr>

                            <tr>
                                <td className="text-center">Enfants de moins de 13 ans</td>
                                <td className="text-center">32,00 &euro;</td>
                            </tr>
                            <tr>
                                <td className="text-center">Enfants de moins de 5 ans</td>
                                <td className="text-center">Gratuit</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-center">Gestion libre</td>
                            </tr>

                            <tr>
                                <td className="text-center">A partir de 20 personnes, d'Avril à Novembre
                                    Draps non fournis; en supplément (4,00 &euro;)
                                    Ménage; 15,00 &euro; par chambre s'il n'est pas assuré par le groupe</td>
                                <td className="text-center">20,00 &euro;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tarifs1;