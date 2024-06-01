import { Bell } from "react-bootstrap-icons";

// eslint-disable-next-line react/prop-types
const NavbarHomepage = ({ navigate }) => {
  return (
    <section className=" my-6 mt-5">
      <div className="flex justify-between items-center align-items-center">
        <img
          className=" h-11 w-auto"
          src={
            "https://kerjayuk.pcsindonesia.com/images/icons/app-icon-new.png"
          }
          alt="logo"
        />
        <Bell
          color="black"
          width={30}
          cursor={"pointer"}
          onClick={() => navigate("/notifications")}
        />
      </div>
      <div className="mt-3">
        <span className=" text-black text-sm font-semibold">
          Hi, Good Morning!
        </span>
      </div>
    </section>
  );
};

export default NavbarHomepage;
