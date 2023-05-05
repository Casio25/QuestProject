import "../Contacts/Contacts.css"
import { MapContainer } from "react-leaflet";
import MapComponent from "../../Map/ContactMap"; // Import MapComponent

export const Contacts = () => {
    return (
        <div className="container">
            <div className="ContactBlock">
                <h1 className="contact_header">Контакти</h1>
                <h3 className="address_header">Адреса</h3>
                <div className="address_info">Львів, Площа Ринок, 3Б</div>
                <h3 className="schedule_header">Години роботи</h3>
                <div className="schedule_info">Щоденно з 9:00 до 22:00</div>
                <h3 className="phne_header">Телефон</h3>
                <div className="phone_number">+38 (050) 555-99-55</div>
                <h3 className="email_header">E-mail</h3>
                <div className="email_inf0">lviv.games@game.ua</div>
            </div>
            <div className="MapBlock"><MapComponent /></div> 
        </div>
    );
}

