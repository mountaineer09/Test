import Image from 'next/image';
import Link from 'next/link'
import Home from '../pages/home';
import Index from '../pages';



const NavbarLibrary = () => {
    return (

        <nav className="navbar navbar-expand-lg avbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a href="/index" className="navbar-left">
                    <Image className="card__image" src="/bibliologo.jpg" width='90px' height='90px' alt='logobiblio' />
                </a>
                <Link href="/chalet"><a className="navbar-brand" href="#">La Bibliothèque</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/home"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/lum"><a className="nav-link" href="#">Mes livres</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/tarifs'><a className="nav-link" href="#">Nouveauté</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/tarifs'><a className="nav-link" href="#">Tarifs</a></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Réservation
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link href="/booking"><li><a className="dropdown-item" href="#">Ma bibliothèque</a></li></Link>
                                <Link href="/contacts"><li><a className="dropdown-item" href="#">Contacts</a></li></Link>
                                <Link href="/partenaires"><li><a className="dropdown-item" href="#">Partenaires</a></li></Link>
                                <Link href="/galerie"><li><a className="dropdown-item" href="#">Galerie</a></li></Link>
                                <Link href="/documents"><li><a className="dropdown-item" href="#">Documents</a></li></Link>
                            </ul>
                        </li>
                    </ul >
                </div >
            </div >
        </nav >
    );
}

export default NavbarLibrary;