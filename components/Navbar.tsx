import Image from 'next/image';
import Link from 'next/link'

const Navbar= () => {
    return (
    // <nav>
      // <div className= "logo">
        //   <h1>Chalet</h1>
     // </div>
      // <Link href={'/'}><a>Home</a></Link>
      // <Link href={'about'}><a>About</a></Link>
     //  <Link href={'/'}><a>Chalet Listing</a></Link>
   //  </nav>
<nav className="navbar navbar-expand-lg avbar navbar-dark bg-primary">
  <div className="container-fluid">
  <a href="#" className="navbar-left"><img 
        className="m-2 w-10 sm:w-20 self-center"                                          
        src="\lodge.PNG" width="45" alt=""
      /></a>
    <a className="navbar-brand" href="#">Chalet Lum D’Amount</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Lum d’Amount</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;