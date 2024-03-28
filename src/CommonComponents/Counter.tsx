import { useEffect, useState } from "react";

const Counter = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setMinutes(prevMinutes => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else {
              setHours(prevHours => {
                if (prevHours > 0) {
                  return prevHours - 1;
                } else {
                  setDays(prevDays => {
                    if (prevDays > 0) {
                      return prevDays - 1;
                    } else {
                      clearInterval(timer);
                      return 0;
                    }
                  });
                  return 23;
                }
              });
              return 59;
            }
          });
          return 59;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-5" style={{ justifyContent:'center', color: 'rgba(252, 252, 252, 0.5)' }}>
      <div className="flex flex-col">
        <span className={`countdown font-mono text-5xl`}>{days}</span>
        days
      </div>
      <div className="flex flex-col">
        <span className={`countdown font-mono text-5xl`}>{hours}</span>
        hours
      </div>
      <div className="flex flex-col">
        <span className={`countdown font-mono text-5xl`}>{minutes}</span>
        min
      </div>
      <div className="flex flex-col">
        <span className={`countdown font-mono text-5xl`}>{seconds}</span>
        sec
      </div>
    </div>
  );
};

export default Counter