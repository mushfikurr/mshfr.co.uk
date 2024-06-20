import { useState, useEffect } from "react";

function useLondonTime() {
  const [londonTime, setLondonTime] = useState("");

  useEffect(() => {
    function updateLondonTime() {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/London",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      };

      const formatter = new Intl.DateTimeFormat("en-GB", options);
      const formattedTime = formatter.format(currentDate);
      setLondonTime(formattedTime);
    }

    updateLondonTime();

    const intervalId = setInterval(updateLondonTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return londonTime;
}

export default useLondonTime;
