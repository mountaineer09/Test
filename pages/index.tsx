import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


import 'bootstrap/dist/css/bootstrap.css'
import { isTargetLikeServerless } from 'next/dist/server/config'



export default function Home() { 
  const text: string = "Next.js! L'orem ipsum dolor sit amet, consectetur adipisci elit" 
  const props: any = {
titre : "mon titre", description : "ma description" 
  }
  return (
    <div>
        <Navbar></Navbar>
        <h1>Homepage</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
        <Footer></Footer>
    </div>
  )
}


