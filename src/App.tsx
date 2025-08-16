import "./App.css";
import Counter from "./components/Counter/Counter";
import FormComponent from "./components/Form/Form";
import UserEvent from "./components/UserEvent/UserEvent";
import UserTable from "./components/UserTable/UserTable";
// import FruitList from "./components/FruitList/FruitList";
//import Users from "./components/Users/Users";

// const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

export const users = [
  { id: 1, name: "Jone", age: 35 },
  { id: 2, name: "Jane", age: 32 },
  { id: 3, name: "Joe", age: 34 },
];

function App() {
  return (
    <div>
      <p>Hello world</p>
      {/* <PrimaryButton />
      <PrimaryButton actionType="Delete" /> */}
      {/* <Users /> */}
      {/* <FruitList fruits={fruits} /> */}
      <UserTable users={users} />
      <UserEvent />
      <FormComponent
        onSubmit={(data) => {
          console.log(data);
        }}
      />
      <Counter />
    </div>
  );
}

export default App;
