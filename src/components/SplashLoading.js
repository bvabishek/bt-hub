import React, { useState } from "react";

const SplashLoading = () => {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 3));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ width: "35%", height: "10px", overflow: 'hidden' }} className='mt-5'>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#2A5A86",
          transition: 'width 0.5s ease-in-out'
        }}
      />
    </div>
  );
};

export default SplashLoading;