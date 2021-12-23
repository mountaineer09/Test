import Navbar from "../components/Navbar";
import CalendarApi from "../components/CalendarApi";
import Caroussel from "../components/Caroussel2";
import Footer from "../components/Footer";

const Booking = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">

                <CalendarApi></CalendarApi>

            </div>
            <Footer></Footer>
        </div>
    );
}

export default Booking;