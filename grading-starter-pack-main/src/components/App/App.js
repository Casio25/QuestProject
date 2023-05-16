import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Contacts } from "components/Pages/Contacts/Contacts";
import { Games } from "components/Pages/Games/Games";
import { QuestPage } from "components/Pages/QuestPage/QuestPage";
import { CheckLocation } from "components/CheckLocation";
import "./App.css"


export const App = () => {
    return (
        <div className="app_container">
            <BrowserRouter>
                <Header />
                <CheckLocation />
                <Routes>
                    <Route path="/games" element={<Games />}/>
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/quests/:id" element={<QuestPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
