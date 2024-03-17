import { IconType } from "react-icons";
import { Link, useLocation, Location } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { useState, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>logo.</h2>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <Li
              url="/"
              text="Dashboard"
              Icon={RiDashboardFill}
              location={location}
            />

            <Li
              url="/admin/Products"
              text="Products"
              Icon={RiShoppingBag3Fill}
              location={location}
            />

            <Li
              url="/admin/Customers"
              text="Customers"
              Icon={IoIosPeople}
              location={location}
            />

            <Li
              url="/admin/Transactions"
              text="Transaction"
              Icon={AiFillFileText}
              location={location}
            />
          </ul>
        </div>

        {phoneActive && (
            <button id="close-sidebar" onClick={() => setShowModal(false)}>
              close
            </button>
          )}

      </aside>
    </>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, location, Icon, text }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0, 115, 255, 0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0, 115, 255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
