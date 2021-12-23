import Navbar from "../components/Navbar";
import CalendarApi from "../components/CalendarApi";
import Caroussel from "../components/Caroussel2";

const Reservation = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">

                <CalendarApi></CalendarApi>

            </div>
        </div>
    );
}

export default Reservation;