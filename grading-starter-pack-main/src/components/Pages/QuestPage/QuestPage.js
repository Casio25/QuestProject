import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import clock from "../../../assets/img/icon/clock.png"
import divider from "../../../assets/img/icon/divider.png";
import person from "../../../assets/img/icon/person.png";
import puzzle from "../../../assets/img/icon/puzzle.png";
import "./QuestPage.css";

export const QuestPage = () => {

    const { id } = useParams();
    const [quest, setQuest] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/quests")
            .then((response) => response.json())
            .then((data) => {
                setQuest(data.find((q) => q.id === parseInt(id)))
            })
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className="quest-page-container" style={{ backgroundImage: `url(..//${quest.coverImg})` }}>
            <div className="quest-info-main">
                <h3 className="quest-type">{quest.type}</h3>
                <h1 className="quest-title">{quest.title}</h1>
                <div className="quest-info-details">
                    <img className="clock-icon" src={clock} alt="clock" />
                    <p className="quest-duration">{quest.duration} хв.</p>
                    <img className="divider" src={divider} alt="divider" />
                    {quest.peopleCount && (
                        <>
                            <img className="person-icon" src={person} alt="person" />
                            <p className="quest-player-count">{quest.peopleCount[0]}-{quest.peopleCount[1]} осіб</p>
                            <img className="divider" src={divider} alt="divider" />
                        </>
                    )}
                    <img className="puzzle-icon" src={puzzle} alt="puzzle" />
                    <p className="quest-level">{quest.level}</p>
                </div>
                <p className="quest-description">{quest.description}</p>
            </div>
            <Link to="/join">
                <button className="join-game-button">Взяти участь</button>
            </Link>
        </div>
    );
};
