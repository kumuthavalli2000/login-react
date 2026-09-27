import ReactDOM from "react-dom/client";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import App from './App';
import Welcome from './welcomepage';
import AccCreation from "./AccCreation";
export const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/success" element={<Welcome/>}></Route>
    <Route path="/fail" element={<AccCreation/>}></Route>
    </Routes>
    </BrowserRouter>
)


