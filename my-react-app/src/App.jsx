import List from './List.jsx'
import ListProps from './ListProps.jsx'
import Updater from './useState.jsx'
import ChangeEvents from './onChange.jsx'
import ColorPicker from './ColorPicker.jsx'
import ToDoList from './toDoList.jsx'


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
      <br />
      <Updater />
      <br />
      <ChangeEvents />
      <br />
      <ColorPicker />
      <br />
      <ToDoList />
    </>

  );
}

export default App
