import Navbar from "../components/Navbar";
import Image from 'next/image';

const Tarifs = () => {
    return (
        <div>
            <Navbar></Navbar><br />
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
                                    <td scope="col" className="text-center">Adultes</td>
                                    <td scope="row" className="text-center">47,00 &euro;</td>
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
                                    <td className="text-center">A partir de 20 personnes,<br />
                                        d'Avril à Novembre
                                        Draps non fournis;<br /> en supplément (4,00 &euro;)<br />
                                        Ménage; 15,00 &euro; par chambre s'il n'est pas assuré par le groupe</td>
                                    <td className="text-center">20,00 &euro;</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th colSpan={2} className="text-center">Publics scolaires & Associations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2} className="text-center">Pension complète</td>
                                </tr>

                                <tr>
                                    <td scope="col" className="text-center">Adultes / Lycéens</td>
                                    <td scope="row" className="text-center">45,00 &euro;</td>
                                </tr>

                                <tr>
                                    <td className="text-center">Collégiens</td>
                                    <td className="text-center">40,00 &euro;</td>
                                </tr>
                                <tr>
                                    <td className="text-center">Primaires</td>
                                    <td className="text-center">35,00 &euro;</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="text-center">Gratuitée pour une personne à partir de 20 participants</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th colSpan={2} className="text-center">Autres prestations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2} className="text-center">Location de salle (séminaires, assemblées générales, ...)</td>
                                </tr>

                                <tr>
                                    <td scope="col" className="text-center">Journée Repas compris</td>
                                    <td scope="row" className="text-center">200,00 &euro;</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="text-center">Restauration</td>
                                </tr>
                                <tr>
                                    <td className="text-center">Repas</td>
                                    <td className="text-center">11,00 &euro;</td>
                                </tr>
                                <tr>
                                    <td className="text-center">Petit déjeuner</td>
                                    <td className="text-center">6,00 &euro;</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="text-center">Location de raquettes</td>
                                </tr>
                                <tr>
                                    <td className="text-center">1/2 Journée</td>
                                    <td className="text-center">4,00 &euro;</td>
                                </tr>
                                <tr>
                                    <td className="text-center">Journée</td>
                                    <td className="text-center">6,00 &euro;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="card-text">Capacité d'hébergement de 65 lits.<br />
                        🔥 Dans une ambiance familiale, chaleureuse et conviviale, plusieurs formules sont possibles toute l’année :<br /><br />

                        ❄️ Seul, en couple, en famille, groupes, comités d’entreprises, etc<br />
                        🌲 Evénements (mariages, séminaires, etc)<br />
                        ☃️ Hébergement en pension complète, demi-pension ou en gestion libre<br />
                        🦸 Enfants et jeunes en séjours organisés, camps, colonies, classes de neige ou vertes, d’immersion en langues, etc<br />
                        ❤️ Personne en situation de handicap (voir équipements)<br /><br />

                        Reservez dès maintenant votre séjour !<br />
                        Appelez nous au 05.61.01.06.76 / 06.74.19.16.92 ou Ecrivez à l’adresse contact@lum-damont.com<br /><br />

                        🀩 L’association organise plusieurs événements dans l’année. Voir toutes nos activités<br /><br />
                        <a href="#" className="fa fa-facebook"></a><br />
                        <a href="#" className="fa fa-twitter"></a><br />

                        L’établissement est déclaré auprès de la Direction Départementale de la Jeunesse, des Sports et de la Vie Associative.<br />
                        Il est agréé par l’Education Nationale et dispose d’un partenariat avec la Caisse d’Allocations Familiales.</p><br />
                </div>
            </div>
        </div>




    );
}

export default Tarifs;