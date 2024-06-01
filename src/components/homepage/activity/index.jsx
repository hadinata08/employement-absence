import { Clock, ClockHistory } from "react-bootstrap-icons";

const Activity = () => {
  return (
    <section className="mt-3 my-6 p-3">
      <p className="text-black font-semibold text-base">{`Today's Activity`}</p>
      <div className="flex text-center mt-3 ">
        <div className="w-full flex flex-col justify-center align-middle items-center">
          <Clock color="#F82C17" fontSize={"25px"} />
          <p className="mt-3 text-black text-sm pt-1 font-bold">08:30</p>
          <p className="mt-1 text-black text-xs font-normal">Check In</p>
        </div>

        <div className="w-full flex flex-col justify-center align-middle items-center">
          <ClockHistory color="#F82C17" fontSize={"25px"} />
          <p className="mt-3  text-base font-bold text-[#F82C17]">03:00:00</p>
          <p className="mt-1 text-black text-xs font-normal">Working Hours</p>
        </div>

        <div className="w-full flex flex-col justify-center align-middle items-center">
          <Clock color="#F82C17" fontSize={"25px"} />
          <p className="mt-3 text-black text-sm font-semibold">--:--</p>
          <p className="mt-1 text-black text-xs font-normal pt-1">Check Out</p>
        </div>
      </div>
    </section>
  );
};

export default Activity;
