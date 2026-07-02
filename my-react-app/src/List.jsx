function List(){

    const fruits = [{id: 1, name: 'apple', calories: 95}, 
                    {id: 2, name: 'banana', calories: 105},
                    {id: 3, name: 'cherry', calories: 50}, 
                    {id: 4, name: 'date', calories: 110}, 
                    {id: 5, name: 'elderberry', calories: 120}];

    fruits.sort((a, b) => a.calories - b.calories); //Növekvő sorrend
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ABC

    const listItems = fruits.map((fruit) =>
        <li key={fruit.id}>
        {fruit.name}: &nbsp;
        {fruit.calories} kcal</li>
    );

    return(<ul>{listItems}</ul>);
}

export default List;