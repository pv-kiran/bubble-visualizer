import { useState } from "react";
import { saveInput, sortArr } from "../feature/sortSlice";
import { useDispatch } from "react-redux";

function InputForm() {
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveInput(parseInt(input)));
    setInput(0);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          name="input"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <button className="btn-sort" onClick={() => dispatch(sortArr())}>
        Sort
      </button>
    </>
  );
}

export default InputForm;
