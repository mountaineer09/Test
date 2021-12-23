import Navbar from "../components/Navbar";
import CalendarApi from "../components/CalendarApi";
import Caroussel from "../components/Caroussel2";

const Reservation = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <CalendarApi></CalendarApi>
            <Caroussel></Caroussel>


        </div>
    );
}

export default Reservation;