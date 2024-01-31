import "./App.css";
import InputForm from "./component/InputForm";
import NewVisualizer from "./component/NewVisualizer";
import Visualizer from "./component/Visualizer";
function App() {
  return (
    <>
      <InputForm />
      <Visualizer></Visualizer>
      <NewVisualizer />
    </>
  );
}

export default App;
