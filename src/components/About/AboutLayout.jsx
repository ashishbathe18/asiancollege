import { Outlet } from "react-router-dom";
import "./about.css";

const AboutLayout = () => {
  return (
    <div className="about-page">
   
      <Outlet />
    </div>
  );
};

export default AboutLayout;
