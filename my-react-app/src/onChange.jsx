import React, { useState } from 'react';

//onChange eseménnyel valós időben tudjuk követni a felhasználó által beírt értékeket, és azokat a komponens állapotában tárolni. A useState hook segítségével létrehozunk három állapotot: name, quantity és payment. Mindegyikhez tartozik egy kezelőfüggvény, amely frissíti az állapotot a felhasználó által bevitt értékek alapján.
function ChangeEvents() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [payment, setPayment] = useState('cash');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value) || 0);
    };

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    };

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
        </div>
    );
}

export default ChangeEvents;