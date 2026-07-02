
function ListProps(props){

    //A szülő komponensből kapott props objektumot használjuk, abból kapjuk az adatinkat
    const cars = props.items;
    const category = props.category;

    const listItems = cars.map((car) =>
        <li key={car.id}>
        {car.name}: &nbsp;
        {car.price} $</li>
    );

    return(<> 
                <h3>{category}</h3>
                <ul>{listItems}</ul>
           </>);
}

// ------------ DEBUGGING -------------


//rendereléskor, ha nem kapunk props-ot, akkor a defaultProps-ban megadott értékeket használja nem pedig hibázik
ListProps.defaultProps = {
    items: [],
    category: 'Default Category'
}
export default ListProps;