import React, { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import {
  Navbar,
  Collapse,
  Typography,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { UserIcon, ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "react-toastify/dist/ReactToastify.css";
import img from "../assets/images/logo-2.png";
import { notify } from "./ToastMessage/message";

const menuItems = [
  { title: "Patient", navLink: "/pl" },
  { title: "Appointment", navLink: "/p_list" },
  { title: "Diagnosis" },
  { title: "Blood Bank" },
  { title: "Insurance" },
  { title: "Billing" },
  { title: "Doctors", navLink: "/doctor" },
  { title: "Reports" },
];

function NavList() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    notify("You have been logged out successfully!", "success");
    navigate("/home");
  };

  const handleNavLinkClick = (e, navLink) => {
    if (!user && navLink) {
      e.preventDefault();
      notify("Please login to access this page.", "error");
    }
  };

  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      {menuItems.map((item, index) =>
        item.navLink ? (
          <NavLink
            key={index}
            to={item.navLink}
            onClick={(e) => handleNavLinkClick(e, item.navLink)}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-medium" : "text-gray-700 font-medium"
            }
          >
            <Typography as="a" variant="small" className="font-medium">
              <ListItem className="flex items-center gap-2 py-2 pr-4">{item.title}</ListItem>
            </Typography>
          </NavLink>
        ) : (
          <Typography
            key={index}
            as="span"
            variant="small"
            color="gray"
            className="font-medium cursor-not-allowed"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">{item.title}</ListItem>
          </Typography>
        )
      )}
      {!user ? (
        <NavLink to="/login">
          <Button size="sm" variant="outlined" color="blue">
            Login
          </Button>
        </NavLink>
      ) : (
        <Menu placement="bottom-end" allowHover>
          <MenuHandler>
            <ListItem className="flex items-center gap-2 py-1 pr-2 w-30">
              {user.profileImage ? (
                <img src={user.profileImage} alt="User profile picture" className="h-6 w-6 rounded-full" />
              ) : (
                <UserIcon className="h-6 w-6 text-gray-600" />
              )}
              <ChevronDownIcon className="h-4 w-4" />
            </ListItem>
          </MenuHandler>
          <MenuList className="rounded-xl">
            <MenuItem>
              <button onClick={handleLogout} className="text-red-500 w-full text-left">
                Logout
              </button>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </List>
  );
}

export function MainNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="max-w-full mx-auto rounded-none shadow-none fixed z-20 top-0 p-0">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/home"
          variant="h6"
          className="mr-4 text-2xl cursor-pointer py-1.5 lg:ml-2"
        >
          <img src={img} className="h-14" alt="Logo" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton variant="text" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
      <ToastContainer />
    </Navbar>
  );
}
