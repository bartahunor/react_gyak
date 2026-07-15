import React, { useState } from 'react';

//onChange eseménnyel valós időben tudjuk követni a felhasználó által beírt értékeket, és azokat a komponens állapotában tárolni. A useState hook segítségével létrehozunk három állapotot: name, quantity és payment. Mindegyikhez tartozik egy kezelőfüggvény, amely frissíti az állapotot a felhasználó által bevitt értékek alapján.
function ChangeEvents() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [payment, setPayment] = useState('cash');

    function handleNameChange(e){
        setName(e.target.value);
    };

    function handleQuantityChange(e){
        setQuantity(parseInt(e.target.value) || 0);
    };

    function handlePaymentChange(e){
        setPayment(e.target.value);
    };

    //Objektumok és updater functions
    const [car, setCar] = useState({year: 2024, make: 'Ford', model: 'Mustang'});

    function handleCarYearChange(e) {
        setCar(c => ({...c, year: e.target.value}));    //Az updater function segítségével frissítjük a car objektum year tulajdonságát, miközben megőrizzük a többi tulajdonságot. A setCar függvény egy új objektumot hoz létre, amely tartalmazza az aktuális car objektum összes tulajdonságát, és csak a year tulajdonságot módosítja az új értékre.
    }

    function handleCarMakeChange(e) {
        setCar(c => ({...c, make: e.target.value}));
    }

    function handleCarModelChange(e) {
        setCar(c => ({...c, model: e.target.value}));
    }

    //Tömbök és updater functions
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);

    function handleAddFruit() {
        const fruitInput = document.getElementById('fruit-input').value;
        document.getElementById('fruit-input').value = '';

        setFruits(f => [...f, fruitInput]);  //Az updater function segítségével frissítjük a fruits tömböt, miközben megőrizzük a meglévő elemeket. A setFruits függvény egy új tömböt hoz létre, amely tartalmazza az aktuális fruits tömb összes elemét, és hozzáadja az új gyümölcsöt a végére.
    }

    function handleRemoveFruit(index) {
        setFruits(fruits.filter((_, i) => i !== index));  //Az updater function segítségével frissítjük a fruits tömböt, miközben eltávolítjuk a kiválasztott elemet. A setFruits függvény egy új tömböt hoz létre, amely tartalmazza az aktuális fruits tömb összes elemét, kivéve azt az elemet, amelynek az indexe megegyezik a kiválasztott index-szel.
    }

    //Objektumok tömbjeinek kezelése
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars(c => [...c, newCar]);  //Az updater function segítségével frissítjük a cars tömböt, miközben hozzáadjuk az új autót. A setCars függvény egy új tömböt hoz létre, amely tartalmazza az aktuális cars tömb összes elemét, és hozzáadja az új autót a végére.

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleCarYearChange(e) {
        setCarYear(e.target.value);
    }
    function handleCarMakeChange(e) {
        setCarMake(e.target.value);
    }
    function handleCarModelChange(e) {
        setCarModel(e.target.value);
    }

    return (
        <div id="change-events">
            <label>
                <p>Name: {name}</p>
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                <p>Quantity: {quantity}</p>
                <input type="number" value={quantity} onChange={handleQuantityChange} />
            </label>
            <br />
            <label>
                <p>Payment: {payment}</p>
                <select value={payment} onChange={handlePaymentChange}>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </select>
            </label>
            <br />
            <label>
                <p>My favorite car: {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={handleCarYearChange} />
                <input type="text" value={car.make} onChange={handleCarMakeChange} />
                <input type="text" value={car.model} onChange={handleCarModelChange} />
            </label>
            <hr />
            <h2>My favorite fruits:</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index} onClick={() => handleRemoveFruit(index)}>
                        {fruit}
                    </li>
                ))}
            </ul>
            <input type="text" id="fruit-input" placeholder="Add a fruit"></input>
            <button onClick={handleAddFruit}>Add Fruit</button>
            <hr />
            <h2>Car objects</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
            <input type="number" value={carYear} onChange={handleCarYearChange} placeholder="Year"></input><br />
            <input type="text" value={carMake} onChange={handleCarMakeChange} placeholder="Make"></input><br />
            <input type="text" value={carModel} onChange={handleCarModelChange} placeholder="Model"></input><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default ChangeEvents;