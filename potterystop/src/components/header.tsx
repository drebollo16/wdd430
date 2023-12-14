import React from "react";

const HeaderBar = () => {
    return (
        <>
        <div className="my-global-wrapper">

           <link href="/styles/globals.module.css" rel="stylesheet" />
            <header className="bg-secondary p-4 flex items-center">
            <img src="/images/bowl.png" className="h-10" alt="headerimg" />
            <h1 className="text-accent font-bold mr-4">Pottery Stop</h1>     
            </header>
            </div>
        </>
    );
};

export default HeaderBar;
