import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./QuestFilter.css"
import person from "../../assets/img/icon/person.png";
import divider from "../../assets/img/icon/divider.png";
import puzzle from "../../assets/img/icon/puzzle.png"

export const QuestFilter = () => {
    const typesHTML = [
        "Всі Ігри",
        "Пригодне",
        "Страшне",
        "Містичне",
        "Детективне",
        "Sci-fi",
    ];
    const typesJSON = [
        "any",
        "adventures",
        "horror",
        "mystic",
        "detective",
        "sci-fi",
    ];

    const [quests, setQuests] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/quests")
            .then((response) => response.json())
            .then((data) => {
                setQuests(data);
                setFilteredData(data);
                console.log(data)
                
            })
            .catch((error) => console.error(error));
    }, []); 

    const typeFilter = (e) => {
        const filteredQuests = quests.filter((quest) => {
            if (e === "any") {
                return true; 
            } else {
                return quest.type === e; 
            }
        });

        setFilteredData(filteredQuests); // update filtered data state
        console.log(filteredData)
    };

    return (
        <>
        <div className="FilterBlock">
            <nav className="filter_values">
                {typesHTML.map((typeHTML, index) => (
                    <li
                        key={typesJSON[index]}
                        value={typesJSON[index]}
                        onClick={() => typeFilter(typesJSON[index])}
                    >
                        {typeHTML}
                    </li>
                ))}
            </nav>
            </div>
            <div className="filtered_data">
            {filteredData.map((quest) => (
                <div className="card" key={quest.id}>
                    <Link to={`/quests/${quest.id}`}>
                        <img className="quest_img" src={quest.previewImg} alt={quest.previewImg} />
                    </Link>
                    <div className="quest_info">
                        <p>{quest.title}</p>
                        <div className="type_count">
                            <img src={person} alt={person} />
                            <p className="people_count">{quest.peopleCount[0]}-{quest.peopleCount[1]}</p>
                            <img className="divider_img" src={divider} alt={divider} />
                            <img className="puzzle_img" src={puzzle} alt={puzzle} />
                            <p className="quest_level">{quest.level}</p>
                        </div>
                    </div>
                </div>
                
            ))}
            </div>
        </>
    );
};

