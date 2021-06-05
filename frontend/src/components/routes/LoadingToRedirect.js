import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const LoadingToRedirect = () => {
  let history = useHistory();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    //redirecting when count==0
    count === 0 && history.push("/");
    //cleanup
    return () => clearInterval(interval);
  }, [count, history]);
  return (
    <div className="container p-5 text-center">
      <h3>Redirecting you in {count} seconds</h3>
    </div>
  );
};

export default LoadingToRedirect;
