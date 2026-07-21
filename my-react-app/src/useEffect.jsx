import React, { useEffect, useState } from 'react';

//A useEffect hook a renderelésnél végrehajtódó hook, ennek segítségével tudunk mellékhatásokat kezelni a komponensekben. A useEffect hookot akkor használjuk, amikor valamilyen műveletet szeretnénk végrehajtani a komponens renderelése után, például adatlekérést, eseménykezelést vagy DOM manipulációt.
//useEffect(() => {}) MInden újra rendelésnél lefut
//useEffect(() => {}, []) Csak az első renderelésnél fut le
//useEffect(() => {}, [valami]) Csak akkor fut le, ha a valami változik


function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    function handleButtonClick() {
        setCount(count + 1);
    }

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth);
        setHight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Eventlistener hozzáadva");
    }, []) //Csak az első renderelésnél addja hozzá

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleButtonClick}>
                Click me
            </button>
            <p>Windiow size: {width}px x {height}px</p>
        </div>
    );
}

export default UseEffectExample;