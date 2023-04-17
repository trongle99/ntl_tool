import React from "react";
import CreateEntity from "../components/CreateEntity";
import MainContent from "../components/MainContent";

const EntityPage = () => {
    return (
        <MainContent title={"Create Entity"}>
            <CreateEntity />
        </MainContent>
    );
};

export default EntityPage;
