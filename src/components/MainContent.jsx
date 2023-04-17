import React from "react";

const MainContent = ({ title, children }) => {
    return (
        <div className="w-full overflow-x-hidden flex flex-col">
            <main className="w-full flex-grow px-6 py-5">
                <h1 className="text-3xl text-black pb-6">{title}</h1>

                <div className="w-full mt-12">{children}</div>
            </main>

            <footer className="w-full text-center p-4">
                &copy; Copyright 2023 by TrongLe
            </footer>
        </div>
    );
};

export default MainContent;
