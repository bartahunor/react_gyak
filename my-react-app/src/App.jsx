import List from './List.jsx'
import ListProps from './ListProps.jsx'


function App() {

   const cars = [{id: 1, name: 'Ford', price: 20000}, 
                    {id: 2, name: 'BMW', price: 30000},
                    {id: 3, name: 'Audi', price: 25000}, 
                    {id: 4, name: 'Mercedes', price: 35000}, 
                    {id: 5, name: 'Toyota', price: 22000}];

  return (
    <>
      <List />
      <br />
      {cars.length > 0 && <ListProps items={cars} category="Cars" />}
    </>

  );
}

export default App
