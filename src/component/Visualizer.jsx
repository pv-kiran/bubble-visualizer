import { useSelector } from "react-redux";

function Visualizer() {
  const { inputArr } = useSelector((state) => {
    return state.sort;
  });

  console.log(inputArr);

  //   const inputArr = [10, 20, 30, 40, 34, 1];

  //   for (let i = 0; i < inputArr.length; i++) {
  //     for (let j = 1; j < inputArr.length - i; j++) {
  //       if (inputArr[j] < inputArr[j - 1]) {
  //         let temp = inputArr[j - 1];
  //         inputArr[j - 1] = inputArr[j];
  //         inputArr[j] = temp;
  //       }
  //     }
  //   }
  console.log(inputArr);

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
