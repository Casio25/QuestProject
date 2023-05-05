import { useEffect, useState } from "react";

export const Games = () => {

    const [quests, setQuests] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/quests")
        .then((response) => response.json())
        .then(data => setQuests(data))
        .catch((error) =>console.error(error))
    })



    return(
        <>
        <div>Test</div>
        </>
    );
}