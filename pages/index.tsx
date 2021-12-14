import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardTitle from '../components/CardTitle'
import Map from '../components/Map'
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
        <img
          className="card-img swiper-slide"
          src="\DSC_0341.JPG" alt=""
        />
        <div className="card-img-overlay">
          <h5 className="card-title text-center col-md-8 col-xs-12 offset-md-2">BIENVENU AU CHALET LUM D’AMONT</h5>
          <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Le Chalet Lum d’Amont en Ariège est un chalet pouvent accueillir des groupes tout comme des familles</p><br />
          <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Dans un cadre privilégié au coeur des Pyrénées</p>
          <p className="card-text text-center col-md-8 col-xs-12 offset-md-2">Profitez d'un air pur et vivifiant dans un lieu chaleureux</p><br />
          <p className="card-text text-center col-md-8 col-xs-12 offset-md-2"></p><br />
        </div>
      </div>
      <h1>Homepage</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
      <Map></Map>
      <Footer></Footer>
    </div>
  )
}


