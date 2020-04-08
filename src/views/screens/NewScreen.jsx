import React from "react";

const KomponenAku = () => {
    // penulisan function ditaroh di dalam komponen
    const btnHandler = () => {
        alert("You Click Me!");
    };

    let hello = "testing";

    return (
        <div>
            {/* function ditulis tanpa parameter, penulisan salah btnHandler() */}
            <input onClick={btnHandler} type="button" value="ClickMe"/>
        </div>
    );
};

const NewScreen = () => {
    return (
    <div>
        <h1>Ini screen baru</h1>
        <KomponenAku/>
    </div>
    );
};

export default NewScreen;