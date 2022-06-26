import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import NavbarLibrary from '../components/NavbarLibrary'
import Footer from '../components/Footer'
import CardTitle from '../components/CardTitle'
import Map from '../components/Map'
import Caroussel from '../components/Caroussel'
import Caroussel2 from '../components/Caroussel2'
import Accordion from '../components/Accordion'
import Accordion1 from '../components/Accordion1'
import CalendarApi from '../components/CalendarApi'
import photos from '../public/unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import { isTargetLikeServerless } from 'next/dist/server/config'





export default function Index() {
  const text: string = "Next.js! L'orem ipsum dolor sit amet, consectetur adipisci elit"
  const props: any = {
    titre: "mon titre", description: "ma description"
  }
  return (
    <div>
      <Navbar></Navbar>

      <CardTitle></CardTitle>
      <div className="card bg-dark text-white">
        <Image
          className="card-img swiper-slide"
          src={photos} width='300px' height='300px' alt="ok"
        />
        <div className="card-img-overlay">
          <h5 className="card-title text-center col-md-8 col-xs-12 offset-md-2">BIENVENU AU CHALET LUM D’AMONT</h5>
          <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Le Chalet Lum d’Amont en Ariège est un chalet pouvent accueillir des groupes tout comme des familles</p><br />
          <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Dans un cadre privilégié au coeur des Pyrénées</p>
          <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Profitez d'un air pur et vivifiant dans un lieu chaleureux</p><br />
          <p className="card-text text-center col-md-8 col-xs-12 offset-md-2"></p><br />
        </div>
      </div>
      <div className="container">
        <h2 className="text-center">Historique</h2><br />
        <div className="row">
          <div className="col">
            <p>L’association Le Plantaurel, née il y a plus de 40 ans, a construit le chalet Lum d’Amont, « Lumière d’en haut» sur la station de ski des Monts d’Olmes en Ariège. </p>
          </div>
          <div className="col">
            <p>Un accueil familial et chaleureux pour 65 personnes, été comme hiver, sans oublier le printemps et l’automne, qui privilègie la diversitée, pour des moments de détente, de rencontre et de partage, en plein coeur des Pyrénées.</p>
          </div><br /><br /><br />


        </div><br />


        <div className="container">
          <h2 className="text-center">Offres & services</h2><br />
          <div className="row">
            <div className="col">
              <Accordion1></Accordion1><br />
              <p>Dans le cadre d'une nature préservée, le Chalet Lum d’Amont est, au fil des saisons et à votre rythme, l’assurance d’un accueil personnalisé avec:</p><br />

              <p className="card-text">✔️  Du personnel sympathique et à votre écoutes<br /></p>
              <p className="card-text">✔️  Du personnel sympathique et à votre écoutes<br /></p>
              <p className="card-text">✔️  Une capacitée d'accueil importante disponible toute l’année (65 lits)<br /></p>
              <p className="card-text">✔️  Une cuisine familiale de qualitée<br /></p>
              <p className="card-text">✔️  5 chambres à 4 lits<br /></p>
              <p className="card-text">✔️  Des tarifs préférentiels sur les prix des remontées mécaniques de la station et sur les locations de skis et chaussures à la boutique Le Mouflon<br /></p>
              <p className="card-text">✔️  Des possibilitées de repas froids à emporter sur les pistes, le midi<br /></p>
              <p className="card-text">✔️  La location sur place de raquettes<br /></p>
            </div>
          </div>

          <div className="container">
            <h2 className="text-center">Equipements</h2><br />
            <div className="row">
              <div className="col">
                <p>Le chalet est composé de 65 lits:<br />

                </p>
              </div>
              <div className="col">
                <p>Il dispose également :<br />

                </p>
              </div>
              <Caroussel2></Caroussel2><br />
            </div>





          </div>
        </div>
      </div>
      <Map></Map>
      <Footer></Footer>
    </div>
  )
}


