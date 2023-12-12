import React from "react";

const HeaderBar = () => {
    return (
        <>
            <link href="/styles/global.css" rel="stylesheet" />
            <header className="bg-secondary p-4 flex items-center">
            <img src="/images/bowl.png" className="h-10" alt="headerimg" />
            <h1 className="text-accent font-bold mr-4">Pottery Stop</h1>
 
</header>

        </>
    );
};

export default HeaderBar;
