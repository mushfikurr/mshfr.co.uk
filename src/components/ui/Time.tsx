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

const clocks = [
  Clock12,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
];

const Time: FC = () => {
  const londonTime = useLondonTime();
  const currentHour = new Date().toLocaleString("en-GB", {
    hour: "numeric",
    hour12: false,
    timeZone: "Europe/London",
  });

  const ClockComponent = clocks[parseInt(currentHour, 10) % 12];

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
