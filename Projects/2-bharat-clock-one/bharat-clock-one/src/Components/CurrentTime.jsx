// let CurrentTime = () => {
//   let time = new Date();
//   return (
//     <h1>
//       This is the current time: {time.toLocaleDateString()} -{" "}
//       {time.toLocaleTimeString()}
//     </h1>
//   );
// };

// export default CurrentTime;

import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <h1>
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </h1>
  );
};

export default CurrentTime;
