import { useState } from "react";
import { saveInput, sortArr } from "../feature/sortSlice";
import { useDispatch, useSelector } from "react-redux";

function InputForm() {
  const { inputArr } = useSelector((state) => {
    return state.sort;
  });

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveInput(parseInt(input)));
    setInput("");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="input"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <section>
        {inputArr.length > 0 &&
          inputArr.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
      </section>
      {inputArr.length > 1 && (
        <button className="btn-sort" onClick={() => dispatch(sortArr())}>
          Sort
        </button>
      )}
    </>
  );
}

export default InputForm;
