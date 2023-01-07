import { useEffect, useRef } from "react";
import { default as TypedLib } from "typed.js";

const Typed = ({ ...options }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const typed = new TypedLib(ref.current, options);

    return () => {
      typed && typed.destroy();
    };
  }, [ref, options]);

  return (
    <div className={options?.className}>
      <span ref={ref} />
    </div>
  );
};

export default Typed;
