import { useSelector } from "react-redux";

function Visualizer() {
  const { inputArr } = useSelector((state) => {
    return state.sort;
  });

  return (
    <section>
      {inputArr.length > 0 &&
        inputArr.map((item, index) => {
          return (
            <h3 style={{ height: `${item / 2}rem` }} key={index}>
              {item}
            </h3>
          );
        })}
    </section>
  );
}

export default Visualizer;
