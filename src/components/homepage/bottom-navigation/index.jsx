import {
  CalendarCheck,
  DoorOpenFill,
  FileEarmarkTextFill,
  GearFill,
  HouseFill,
} from "react-bootstrap-icons";

const BottomNavigation = () => {
  return (
    <div className="bottom-navigation">
      <div className=" w-12 flex flex-col items-center justify-center">
        <HouseFill color="#F82D18" fontSize={24} />
        <p className="text-xs font-bold text-[#F82C17]">Home</p>
      </div>

      <div className=" w-12 flex flex-col items-center justify-center">
        <CalendarCheck color="#A0A0A0" fontSize={24} />
        <p className="text-xs font-bold text-[#A0A0A0]">Attendances</p>
      </div>

      <div className="flex justify-center flex-col items-center">
        <div className=" w-16 -mt-10 flex flex-col items-center justify-center bg-[#F82C17] rounded-full h-16">
          <DoorOpenFill color="white" fontSize={24} />
        </div>
        <p className="text-xs font-bold text-[#F82C17]">Check Out</p>
      </div>

      <div className=" w-12 flex flex-col items-center justify-center">
        <FileEarmarkTextFill color="#A0A0A0" fontSize={24} />
        <p className="text-xs font-bold text-[#A0A0A0]">Form</p>
      </div>

      <div className=" w-12 flex flex-col items-center justify-center">
        <GearFill color="#A0A0A0" fontSize={24} />
        <p className="text-xs font-bold text-[#A0A0A0]">Setting</p>
      </div>
    </div>
  );
};

export default BottomNavigation;
