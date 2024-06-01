import NavbarHomepage from "../../components/homepage/navbar-homepage";
import ProfileCard from "../../components/homepage/profile-card";
import PCSNews from "../../components/homepage/pcs-news";
import StatusActivity from "../../components/homepage/status-activity";
import BottomNavigation from "../../components/homepage/bottom-navigation";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import Activity from "../../components/homepage/activity";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="body-container">
        <div className="h-full overflow-y-scroll px-6">
          <NavbarHomepage navigate={navigate} />
          <ProfileCard />
          <Activity />
          <PCSNews />
          <StatusActivity />
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default HomePage;
