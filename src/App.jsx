import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const { inputArr } = useSelector((state) => {
    return state.sort;
  });
  console.log(inputArr);
  return (
    <>
      <h1>Sorting</h1>
    </>
  );
}

export default App;
