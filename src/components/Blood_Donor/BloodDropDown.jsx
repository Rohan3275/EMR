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

// import { notify } from "./ToastMessage/message";
import { ToastContainer } from "react-toastify";  // Make sure it's imported globally
import { useNavigate, Link, NavLink as RouterNavLink, NavLink } from "react-router-dom";
// import { AuthContext } from "../AuthContext";





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


export default function BloodDropDown() {
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
                Blood Bank
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
              <NavLink to={"/d_list"} onClick={(e) => handleNavLinkClick(e, "/d_list")}>
                <MenuHandler className="flex items-center justify-between">
  
                  <MenuItem>
                    Blood Register
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
            <NavLink to={"/b_req"} onClick={(e) => handleNavLinkClick(e, "/b_req")}>
              <MenuItem>Blood Request</MenuItem></NavLink>
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