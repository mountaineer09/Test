const Accordion1 = () => {
    return (
        <div className="container">

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>  Tarifs famille</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Pension complète
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>

                                    </tr>
                                </thead>
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Demi pension
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>

                                    </tr>
                                </thead>
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Gestion libre
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">A partir de 20 personnes,<br />
                                            d'Avril à Novembre
                                            Draps non fournis;<br /> en supplément (4,00 &euro;)<br />
                                            Ménage; 15,00 &euro; par chambre s'il n'est pas assuré par le groupe</td>
                                        <td className="text-center">20,00 &euro;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Accordion1;