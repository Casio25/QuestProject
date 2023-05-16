import image from "../assets/img/contacts-bg.jpg"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const CheckLocation = () => {
    const location = useLocation();
    console.log("is game location:", location.pathname.includes("quests"));

    useEffect(() => {
        if (!location.pathname.includes("quests")){
            document.body.style.backgroundImage = `url(http://localhost:3000${image})`;
        }
    }, [location.pathname])
}