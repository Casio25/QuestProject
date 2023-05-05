import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Contacts } from "components/Pages/Contacts/Contacts";
import { Games } from "components/Pages/Games/Games";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/games" element={<Games />}/>
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
