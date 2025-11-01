import React, { createContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AlertContext from "./Contexts/AlertContext";
import Alert from "./Components/Extra/Alert";
import Waiting from "./Components/Extra/Waiting";

import Error from "./Views/Error";
import LocalData from "./Intefaces/LocalData";
import { isMobile } from "react-device-detect";
import MainScreen from "./Views/MainScreen";
import ZThemeContext from "./Contexts/ZThemeContext";
import UISettings from "./Components/Reusables/UISettings";
import AboutUs from "./Views/AboutUs";
import ContactUs from "./Views/ContactUs";
import HomePage from "./Views/HomePage";
import ProjectsPage from "./Views/ProjectsPage";
import ProjectDetail from "./Views/ProjectDetail";
import ServicePage from "./Views/servicePage";
import OrganizationPage from "./Views/OrganizationPage";
import Teams from "./Views/TeamsPage"


function App(params: any) {



    const [authWaiting, setAuthWaiting] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [showWaiting, setWaiting] = useState<boolean>(false);
    const [alertType, setAlertType] = useState<"success" | "error" | "warning" | "info">("info");
    const [alertMessage, setMessage] = useState<string>("");
    const [menu, setMenu] = useState<boolean>(false);
    const [uiSettings, setUiSettings] = useState<boolean>(false);
    const [theme, setTheme] = useState<any>({
        scheme: "zlight",
        button_color: "#181818",

        button_bg: "#FFD800",
        button_bg_hover: "#00418AFF",
        ring_color: "#00408A64"
    })
    const [localData, setLocalData] = useState<LocalData>({
        Users: [],
        Services: [],
        Devices: [],
        Orders: [],
        Repairs: [],
        Technician: []
    });



    useEffect(() => {

        const checkAuth = async (token: string) => {

            setTimeout(() => { setAuthWaiting(true); }, 1);
            setTimeout(() => { setWaiting(true); }, 1);
            // let response = await information(token);


            await loadLocalData();
            setTimeout(() => { setAuthWaiting(false); }, 5);
            setTimeout(() => { setWaiting(false); }, 5);

        };



        let found_theme = window.localStorage.getItem("theme");
        if (found_theme) {
            changeTheme(JSON.parse(found_theme));
        }

    }, []);

    const setAlert = (
        message: string,
        type: "success" | "error" | "warning" | "info"
    ) => {

        setAlertType(type);
        setShowAlert(true);
        setMessage(message);

        setTimeout(() => {
            setShowAlert(false);
        }, 3000);

    }

    const loadLocalData = async () => {

        let temp_data = localData;

        setLocalData(temp_data);

    }

    const changeTheme = (value: any) => {

        setTheme(value);
        let element: any = document.getElementById("root");
        if (element) {
            element.className = `accents ${value.scheme}`;
            element.style.setProperty("--button_bg", value.button_bg);
            element.style.setProperty("--button_color", value.button_color);
            element.style.setProperty("--button_bg_hover", value.button_bg_hover);
            element.style.setProperty("--input-ring-color", value.ring_color);
        }
        window.localStorage.setItem("theme", JSON.stringify(value));

    }


    return (
        <ZThemeContext.Provider value={{ theme, setTheme: changeTheme, setUiSettings, uiSettings }}>
            <AlertContext.Provider value={{ showAlert, alertType, setAlertType, setAlert, setWaiting, showWaiting, menu, setMenu }}>

                <BrowserRouter>
                    <Routes>
                        {/* <Route path="/home" element={<HeroSection />}></Route> */}
                        <Route path="/" element={<MainScreen />} >
                            <Route path="" element={<HomePage />} />
                            <Route path="about_us" element={<AboutUs />} />
                            <Route path="projects" element={<ProjectsPage />} />
                            <Route path="project/:id" element={<ProjectDetail />} />
                            <Route path="contact_us" element={<ContactUs />} />
                            <Route path="services" element={<ServicePage />} />
                            <Route path="departments" element={<OrganizationPage />} />
                            <Route path="teams" element={<Teams />} />
                            
                        </Route>
                    </Routes>
                    {showAlert ? (<Alert message={alertMessage} color={alertType} />) : ""}
                    {showWaiting ? (<Waiting />) : ""}
                    {(uiSettings) ? (<UISettings />) : ""}
                </BrowserRouter>

            </AlertContext.Provider>
        </ZThemeContext.Provider>
    );

}

export default App;