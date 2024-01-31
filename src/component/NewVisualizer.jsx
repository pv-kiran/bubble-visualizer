import { useSelector } from "react-redux";

function NewVisualizer() {
  const { testArr, testIndices, isComplete } = useSelector(
    (state) => state.sort
  );

  return (
    <section>
      {testArr?.length > 0 &&
        testArr?.map((item, index) => {
          const isComparing = testIndices?.includes(index);
          return (
            <h3
              style={{
                height: `${item / 2}rem`,
                backgroundColor: isComplete
                  ? "green"
                  : isComparing
                  ? "red"
                  : "blue",
              }}
              key={index}>
              {item}
            </h3>
          );
        })}
    </section>
  );
}

export default NewVisualizer;
