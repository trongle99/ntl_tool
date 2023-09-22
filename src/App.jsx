import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EntityPage from "./pages/EntityPage";
import FormPage from "./pages/FormPage";
import UuidPage from "./pages/UuidPage";
import SpinPage from "./pages/SpinPage";

function App() {
    return (
        <BrowserRouter>
            <div className="h-screen flex">
                <Sidebar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/entity" element={<EntityPage />} />
                    <Route path="/uuid" element={<UuidPage />} />
                    <Route path="/spin" element={<SpinPage />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
