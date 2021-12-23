import Image from 'next/image';

const CardTitle = () => {
    return (



        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <Image className="card__image" src="/unsplash.jpg" width='300px' height='300px' alt='ok' />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Accueil</h5>
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
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>













    );
}

export default CardTitle;




