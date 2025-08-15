import "./App.css";
import FruitList from "./components/FruitList/FruitList";
import Users from "./components/Users/Users";

function App() {
  const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

  return (
    <div>
      <p>Hello world</p>
      {/* <PrimaryButton />
      <PrimaryButton actionType="Delete" /> */}
      <Users />
      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;
