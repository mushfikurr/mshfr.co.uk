import {
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
} from "lucide-react";
import { FC } from "react";
import useLondonTime from "../../utils/hooks/useLondonTime";

const Time: FC = () => {
  const londonTime = useLondonTime();
  const currentHour = new Date().toLocaleString("en-GB", {
    hour: "numeric",
    hour12: false,
    timeZone: "Europe/London",
  });

  const getClockComponent = (hour: number) => {
    switch (hour % 12) {
      case 1:
        return Clock1;
      case 2:
        return Clock2;
      case 3:
        return Clock3;
      case 4:
        return Clock4;
      case 5:
        return Clock5;
      case 6:
        return Clock6;
      case 7:
        return Clock7;
      case 8:
        return Clock8;
      case 9:
        return Clock9;
      case 10:
        return Clock10;
      case 11:
        return Clock11;
      case 0:
      default:
        return Clock12;
    }
  };

  const ClockComponent = getClockComponent(parseInt(currentHour, 10));

  return (
    <div className="absolute px-14 flex items-center gap-3 max-sm:hidden">
      <ClockComponent className="h-5 w-5 text-text-100" />
      <div className="flex flex-col">
        <p className="text-xs text-text-100">London</p>
        <p className="text-sm leading-none">{londonTime}</p>
      </div>
    </div>
  );
};

export default Time;
