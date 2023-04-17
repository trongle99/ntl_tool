import React from "react";
import CreateEntity from "./../components/CreateEntity";
import MainContent from "./../components/MainContent";

const HomePage = () => {
    return (
        <MainContent title={"Home page"}>
            <div className="flex justify-center">
                <p className="text-6xl">WELCOME TO NTL TOOL</p>
            </div>
        </MainContent>
    );
};

export default HomePage;
