import Head from "next/head";
import Image from "next/image";


const CalendarApi = () => {
    return (



        <section className="pb-0" id="339">

            <div className="text-center mb-30">
                <div className="owl-carousel owl-padding-1 m-0 buttons-autohide controlls-over" data-plugin-options='{"singleItem": false, "items": "5", "autoPlay": 3500, "navigation": true, "pagination": false,"autoHeight":true}'>



                    <div className="item-box">
                        <figure>
                            <span className="item-hover">
                                <span className="overlay dark-5"></span>
                                <span className="inner">


                                    <a className="ico-rounded " href="/unsplash.jpg" data-fancybox="gallery" data-caption="Le chalet" data-plugin-options='{"type":"image"}'>
                                        <span className="fa fa-search fs-20"></span>
                                    </a>



                                </span>
                            </span>

                            <Image className="card__image" src="/unsplash.jpg" width='300px' height='300px' alt='ok' />

                        </figure>
                        <p>Le chalet</p>
                    </div>







                    <div className="item-box">
                        <figure>
                            <span className="item-hover">
                                <span className="overlay dark-5"></span>
                                <span className="inner">


                                    <a className="ico-rounded " href="/unsplash2.jpg" data-fancybox="gallery" data-caption="Les pistes" data-plugin-options='{"type":"image"}'>
                                        <span className="fa fa-search fs-20"></span>
                                    </a>



                                </span>
                            </span>

                            <Image className="card__image" src="/unsplash2.jpg" width='300px' height='300px' alt='ok' />

                        </figure>
                        <p>Les pistes</p>
                    </div>







                    <div className="item-box">
                        <figure>
                            <span className="item-hover">
                                <span className="overlay dark-5"></span>
                                <span className="inner">


                                    <a className="ico-rounded " href="/unsplash3.jpg" data-plugin-options='{"type":"image"}'>
                                        <span className="fa fa-search fs-20"></span>
                                    </a>



                                </span>
                            </span>

                            <Image className="card__image" src="/unsplash3.jpg" width='300px' height='300px' alt='ok' />

                        </figure>
                        <p>Encore les pistes ^^</p>
                    </div>







                    <div className="item-box">
                        <figure>
                            <span className="item-hover">
                                <span className="overlay dark-5"></span>
                                <span className="inner">


                                    <a className="ico-rounded " href="/unsplash4.jpg" data-fancybox="gallery" data-caption="Sur la terrasse" data-plugin-options='{"type":"image"}'>
                                        <span className="fa fa-search fs-20"></span>
                                    </a>



                                </span>
                            </span>

                            <Image className="card__image" src="/unsplash4.jpg" width='300px' height='300px' alt='ok' />

                        </figure>
                        <p>Sur la terrassee</p>
                    </div>







                    <div className="item-box">
                        <figure>
                            <span className="item-hover">
                                <span className="overlay dark-5"></span>
                                <span className="inner">


                                    <a className="ico-rounded " href="/unsplash6.jpg" data-fancybox="gallery" data-caption="Foret des Mont d'Olmes sous la neige" data-plugin-options='{"type":"image"}'>
                                        <span className="fa fa-search fs-20"></span>
                                    </a>



                                </span>
                            </span>

                            <Image className="card__image" src="/unsplash6.jpg" width='300px' height='300px' alt='ok' />

                        </figure>
                        <p>Foret des Mont d'Olmes sous la neige</p>
                    </div>


                </div>

                <a href="/unsplash6.jpg" className="btn btn-default m-20">Voir toutes les images</a>
            </div>


        </section>



    );
}

export default CalendarApi;