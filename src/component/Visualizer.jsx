import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Visualizer() {
  const { sortSteps, compareIndices } = useSelector((state) => state.sort);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // visualization logic - time delay
    const timer = setInterval(() => {
      if (currentStep < sortSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    // cleanup function
    return () => clearInterval(timer);
  }, [currentStep, sortSteps.length]);

  return (
    <section>
      {sortSteps[currentStep]?.length > 0 &&
        sortSteps[currentStep]?.map((item, index) => {
          // for changing the color for elements which are comparing
          const isComparing = compareIndices[currentStep].includes(index);
          // for cheking whether visualtion is complete or not
          const isComplete = currentStep === sortSteps.length - 1;
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

export default Visualizer;
