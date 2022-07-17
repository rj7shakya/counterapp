import "./App.css";
// import ClassTest from "./test/ClassTest";
import FunctionTest from "./test/FunctionTest";

function App() {
  return (
    <ClassTest increaseBy={2} />
    <FunctionTest increaseBy={3} />
  );
}

export default App;
