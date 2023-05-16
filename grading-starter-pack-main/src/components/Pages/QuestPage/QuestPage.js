import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clock from "../../../assets/img/icon/clock.png"
import divider from "../../../assets/img/icon/divider.png";
import person from "../../../assets/img/icon/person.png";
import puzzle from "../../../assets/img/icon/puzzle.png";
import "./QuestPage.css";

export const QuestPage = () => {

    // Наш Modal
    const Modal = ({ active, setActive }) => {
        const handleSubmit = (e) => {
            e.preventDefault();

            // значення для форми з беку
            const name = e.target.name.value;
            const phone = e.target.phone.value;
            const amount = parseInt(e.target.amount.value);

            if (amount >= quest.peopleCount[0] && amount <= quest.peopleCount[1]) {
                // правильна кількість людей
                
                console.log("Form submitted successfully.");
            } else {
                // неправильна кількість людей
                alert(`The amount of people must be between ${quest.peopleCount[0]} and ${quest.peopleCount[1]}. Please try again.`);
            }

            // Дата для беку
            const formData = {
                name: name,
                phone: phone,
                amount: amount
            };

            // send the data via fetch()
            fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    // handle the response
                    console.log(response);
                })
                .catch(error => {
                    // handle the error
                    console.error(error);
                });
        }


        return (
            <>
                <div
                    className={active ? "modal active" : "modal"}
                    onClick={() => setActive(false)}
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Заявка на гру</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">

                                <input className="join-quest-input" type="text" id="name" name="name" placeholder="Ваше ім'я" required />
                            </div>
                            <div className="form-group">

                                <input className="join-quest-input" type="tel" id="phone" name="phone" placeholder="Номер телефону" required />
                            </div>
                            <div className="form-group">
                                
                                <input className="join-quest-input" type="number" id="amount" name="amount" placeholder="Кількість людей" required />
                            </div>
                            <button  className="submit-button" type="submit">Відправити заявку</button>
                        </form>
                    </div>
                </div>
            </>
        );
    };



    const { id } = useParams();
    const [quest, setQuest] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/quests")
            .then((response) => response.json())
            .then((data) => {
                setQuest(data.find((q) => q.id === parseInt(id)))
            })
            .catch((error) => console.error(error));
    }, [id]);


    return (
        document.body.style.backgroundImage = `url(..//${quest.coverImg})`,
        <div className="quest-page-container">
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
            <button className="join-game-button" onClick={() => setIsModalOpen(true)}>Взяти участь</button>
            <Modal active={isModalOpen} setActive={setIsModalOpen}/>
        </div>
    );

};
