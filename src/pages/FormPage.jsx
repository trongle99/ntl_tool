import React, { useState } from "react";
import FormInput from "../components/FormInput";
import MainContent from "../components/MainContent";

const FormPage = () => {
    return (
        <MainContent title={"Create Form"}>
            <div className="grid grid-cols-2">
                <FormInput />
            </div>
        </MainContent>
    );
};

export default FormPage;
