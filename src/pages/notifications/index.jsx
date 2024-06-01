import "./notifications.css";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../../components/notification/top-navbar";

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div className="body-container">
      <TopNavbar navigate={navigate} />
      <section>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start bg-[#D7E5FF]">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2108/2108625.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 mt-4"
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Reimbursement</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission &quot;
              <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</i>
              &quot; with the&quot; with of total cost of 50,000 has been{" "}
              <b>paid</b>, please check your BRIMO application, Thank you.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold">Today</p>
        </div>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start ">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2108/2108625.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 -mb-2"
              src="https://cdn-icons-png.flaticon.com/512/10621/10621089.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Reimbursement</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission &quot;
              <i>description</i>&quot; with the&quot; has been <b>rejected</b>,
              please click for details.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold">Yesterday</p>
        </div>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start bg-[#D7E5FF]">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2108/2108625.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 -mb-2"
              src="https://cdn-icons-png.flaticon.com/512/14025/14025295.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Reimbursement</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission will be <b>processed</b> according to
              reimbursement schedule. Please wait.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold w-24">2022-10-06</p>
        </div>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start bg-[#D7E5FF]">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8870/8870385.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 -mb-2"
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Sickness</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission has been <b>approved</b> by the superrior.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold w-24">2022-10-06</p>
        </div>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8870/8870385.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 -mb-2"
              src="https://cdn-icons-png.flaticon.com/512/10621/10621089.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Sickness</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission has been <b>rejected</b> please confirm with your
              superrior.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold w-24">2022-10-06</p>
        </div>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8870/8870385.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 -mb-2"
              src="https://cdn-icons-png.flaticon.com/512/14025/14025295.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Sickness</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission is being <b>reviewed</b> to the superior for the
              approval process, please wait.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold w-24">2022-10-06</p>
        </div>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start bg-[#D7E5FF]">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3094/3094972.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 -mb-2"
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Overtime</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission has been <b>approved</b> by the superrior.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold w-24">2022-10-06</p>
        </div>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3094/3094972.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 -mb-2"
              src="https://cdn-icons-png.flaticon.com/512/10621/10621089.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Overtime</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission has been <b>rejected</b> please confirm with your
              superrior.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold w-24">2022-10-06</p>
        </div>
        <div className="flex w-full gap-4 justify-between px-3 py-4 items-start">
          <div className="h-12 flex items-center justify-center w-16 image-container rounded-md relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3094/3094972.png"
              width={24}
              height={24}
            />
            <img
              className="absolute bottom-0 right-0 -mr-2 -mb-2"
              src="https://cdn-icons-png.flaticon.com/512/14025/14025295.png"
              height={20}
              width={20}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-black text-sm  font-bold">Overtime</p>
            <p className="text-black text-xs pt-1 font-normal">
              Your submission is being <b>reviewed</b> to the superior for the
              approval process, please wait.
            </p>
          </div>

          <p className="text-[#BAC2CF] text-xs font-bold w-24">2022-10-06</p>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
