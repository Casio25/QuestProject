import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/img/header-logo.png"

export const Header = () => {
    return (
        <>
            <div className="HeaderBlock">
                <img src={logo} alt="logo" className="header_logo" />
                <nav className="menu_items">
                    <ul style={{ marginLeft: "auto" }}>
                        <li id="games_item">
                            <NavLink
                                to={"/games"}
                                className={({ isActive }) => isActive ? "active" : "header-link"}
                            >
                                Ігри
                            </NavLink>
                        </li>
                        <li id="newbie_item">
                            <NavLink
                                to={"/new_customer"}
                                className={({ isActive }) => isActive ? "active" : "header-link"}
                            >
                                Новачкам
                            </NavLink>
                        </li>
                        <li id="review_item">
                            <NavLink
                                to={"/reviews"}
                                className={({ isActive }) => isActive ? "active" : "header-link"}
                            >
                                Відгуки
                            </NavLink>
                        </li>
                        <li id="deal_item">
                            <NavLink
                                to={"/deals"}
                                className={({ isActive }) => isActive ? "active" : "header-link"}
                            >
                                Акції
                            </NavLink>
                        </li>
                        <li id="contact_item">
                            <NavLink
                                to={"/contacts"}
                                className={({ isActive }) => isActive ? "active" : "header-link"}
                            >
                                Контакти
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="phone_number">+38 (050) 555-99-55</div>
            </div>
        </>
    );
}

