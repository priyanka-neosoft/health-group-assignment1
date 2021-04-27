import { FC, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";

/**
 * @description Counter Component.
 * used for showing couter page.
 */
const Counter: FC = () => {
  const [count, setCount] = useState(0);

  /**
   * @description updateCount fucntion.
   * this function is used for increasing the counter by 1.
   */
  const updateCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  /**
   * @description resetCount fucntion.
   * this function is used for reset the counter to 0.
   */
  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <Button className="counterButtons" variant="info" onClick={updateCount}>
        Increment
      </Button>
      <Button
        className="counterButtons"
        variant="secondary"
        onClick={resetCount}
      >
        Reset
      </Button>
    </div>
  );
};
export default Counter;
