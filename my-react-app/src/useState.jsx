import React, { useState } from 'react';

//A react hookokal lehet használni előre elkészített elemeket, amik a komponens állapotát kezelik. 
//A useState egy ilyen hook, ami egy változót és egy függvényt ad vissza, amivel a változó értékét lehet módosítani. A useState paraméterként az alapértelmezett értéket várja. Adott változókat ezzel frissítjük hogy a virtual dom újrarenderelje a komponenst. 
function Updater() {

    const [name, setName] = useState('John Doe');   //useState deklarálása, a name változó alapértelmezett értéke 'John Doe', a setName függvény segítségével lehet módosítani az értékét.  
    const updateName = () => {
        setName('Jane Smith');  //setName függvény meghívása
    }

    const [age, setAge] = useState(0);
    const updateAge = () => {
        setAge(age + 1);
    }   

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }
    const resetCount = () => {
        setCount(0);
    }

    //UPDATER FUNCTIONS
    //Ha egyszerre több állapotot szeretnénk frissíteni, akkor a setState függvényeket egymás után hívjuk meg. A React automatikusan újrarendereli a current state alapján így csak a legutolsó állapotot fogja figyelembe venni. Emiatt updater functionst használnk ami a pending state alapján frssít a next satatre.
    //Pl:
    // const incrementCountByThree = () => {
    //     setCount(c => c + 3);
    // }



    return (
        <div id="updater">
            <p>Name: {name}</p>
            <button onClick={updateName}>Update Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Update Age</button>

            <p>Visible: {isVisible ? 'Yes' : 'No'}</p>
            <button onClick={toggleVisibility}>Toggle Visibility</button>

            <div className="counter-container">
                <p className="counter-display">{count}</p>
                <button className="counter-button" onClick={decrementCount}>Decrement</button>
                <button className="counter-button" onClick={resetCount}>Reset</button>
                <button className="counter-button" onClick={incrementCount}>Increment</button>
            </div>
        </div>
        
    );
}

export default Updater;