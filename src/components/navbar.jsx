import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
  UserIcon
} from "@heroicons/react/24/outline";

import img from '../assets/images/logo-2.png';

import { notify } from "./ToastMessage/message";
import { ToastContainer } from "react-toastify";  // Make sure it's imported globally
import { useNavigate, Link, NavLink as RouterNavLink, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext";
const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Laboratory
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <NavLink to={"/tpList"} onClick={(e) => handleNavLinkClick(e, "/tpList")}>
              <MenuHandler className="flex items-center justify-between">

                <MenuItem>
                  Test
                  {/* <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                /> */}
                </MenuItem>

              </MenuHandler>
            </NavLink>
            {/* <MenuList className="rounded-xl">{renderItems}</MenuList> */}
          </Menu>
          <NavLink to={"/managecategories"} onClick={(e) => handleNavLinkClick(e, "/managecategories")}>
            <MenuItem>Category</MenuItem></NavLink>
          {/* <MenuItem>TailwindCSS</MenuItem> */}
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${isMenuOpen ? "rotate-90" : ""
                    }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem>React</MenuItem>
          <MenuItem>TailwindCSS</MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Check localStorage for data
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user');
    setLocalStorageData(data);
  }, []);

  // Handle logout
  const handleLogout = () => {
    logout();
    notify("You have been logged out successfully!", "success");  
    navigate("/home");
    location.reload() // optional
  };

  // Handle navigation link click
  const handleNavLinkClick = (e, navLink) => {
    if (!localStorageData && navLink) {
      e.preventDefault();
      notify("Please login to access this page.", "error")
    }
  };

  // State to manage sublist toggling
  const [openLaboratorySublist, setOpenLaboratorySublist] = useState(false);

  const handleLaboratoryClick = () => {
    setOpenLaboratorySublist(prev => !prev);  // Toggle the sublist
  };

  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <NavLink to={"/pl"} onClick={(e) => handleNavLinkClick(e, "/pl")}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">Patient</ListItem>
        </Typography>
      </NavLink>
      <NavLink to={"/p_list"} onClick={(e) => handleNavLinkClick(e, "/p_list")}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Appointment
          </ListItem>
        </Typography>
      </NavLink>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Diagnosis
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Blood Bank
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Insurance
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Billing
        </ListItem>
      </Typography>
      <NavLink to={"/doctor"} onClick={(e) => handleNavLinkClick(e, "/doctor")}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Doctors
          </ListItem>
        </Typography>
      </NavLink>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Reports
        </ListItem>
      </Typography>
      <NavListMenu />

      {!user ? (
        <Link to="/login">
          <Button size="sm" variant="outlined" color="blue">Login</Button>
        </Link>
      ) : (
        <Menu placement="bottom-end" allowHover>
          <MenuHandler>

            <ListItem className="flex items-center gap-2 py-1 pr-2 w-30">
              {user.profileImage ? (
                <img src={user.profileImage} alt="Profile" className="h-6 w-6 rounded-full" />
              ) : (
                <UserIcon className=" text-gray-600" />
              )}
              <ChevronDownIcon className="h-4 w-4" />
            </ListItem>

          </MenuHandler>
          <MenuList className="rounded-xl" onClick={handleLogout}>
            <MenuItem>
              <button >Logout</button>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </List>
  );
}

export function MainNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className=" max-w-screen-3xl px-4 py-2 fixed top-0 z-20 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink to={'/home'}>
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            <img src={img} className="h-12" alt="Logo" />
          </Typography>
        </NavLink>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
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
    </Navbar>
  );
}