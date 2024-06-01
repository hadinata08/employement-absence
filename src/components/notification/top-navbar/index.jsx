import { ArrowLeft } from "react-bootstrap-icons";

// eslint-disable-next-line react/prop-types
const TopNavbar = ({ navigate }) => {
  return (
    <section className="navigation shadow-lg">
      <div className="flex justify-start gap-4 items-center align-items-center px-4 py-4 shadow-lg w-full">
        <ArrowLeft
          cursor={"pointer"}
          onClick={() => navigate("/")}
          color="black"
          fontSize={18}
          fontWeight={800}
        />
        <p className=" font-extrabold text-lg text-[#F82C17]">Notification</p>
      </div>
    </section>
  );
};

export default TopNavbar;
