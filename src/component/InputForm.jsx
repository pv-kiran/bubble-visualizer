import { useState } from "react";
import { saveInput, setSortData } from "../feature/sortSlice";
import { useDispatch, useSelector } from "react-redux";

function InputForm() {
  const { inputArr } = useSelector((state) => {
    return state.sort;
  });

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrInput = input.split(",");
    const arrConverted = arrInput.map((item) => parseInt(item));
    dispatch(saveInput(arrConverted));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const sort = () => {
    const inputArrCopy = [...inputArr];
    let sortSteps = [];
    let compareIndices = [];

    // sorting logic
    for (let i = 0; i < inputArrCopy.length; i++) {
      for (let j = 1; j < inputArrCopy.length - i; j++) {
        if (inputArrCopy[j] < inputArrCopy[j - 1]) {
          let temp = inputArrCopy[j - 1];
          inputArrCopy[j - 1] = inputArrCopy[j];
          inputArrCopy[j] = temp;
        }

        // visualization logic
        sortSteps.push([...inputArrCopy]);
        compareIndices.push([j - 1, j]);
      }
    }
    dispatch(setSortData({ inputArrCopy, sortSteps, compareIndices }));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="input"
          id="input"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add</button>
      </form>
      <section>
        {inputArr?.length > 0 &&
          inputArr?.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
      </section>
      {inputArr?.length > 1 && (
        <button className="btn-sort" onClick={() => sort()}>
          Sort
        </button>
      )}
    </>
  );
}

export default InputForm;
