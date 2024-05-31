import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiSolidCategory } from "react-icons/bi";
import { IoListCircleSharp } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MdAccountCircle } from "react-icons/md";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/CommentRounded";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Assets/road-radar-logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const mode = localStorage.getItem("mode");
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },

    {
      text: "Cities",
      icon: <BiSolidCategory size={23} />,
      link: "/#cityList",
    },
    {
      text: "About",
      icon: <InfoIcon size={25} />,
      link: "/#about",
    },
    {
      text: "Testimonial",
      icon: <RiFeedbackLine size={25} />,
      link: "/#testimonial",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/#contact",
    },
    {
      text: "Bus List",
      icon: <IoListCircleSharp size={25} />,
      link: "/viewbus",
    },
  ];

  const auth = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const login = () => {
    navigate("/userlogin");
  };
  const register = () => {
    navigate("/userregister");
  };
  const logout = () => {
    localStorage.clear();
    navigate("/userlogin");
  };

  return (
    <div className="w-100 d-flex justify-content-center">
      <nav className="nav-wrapper rounded-4 mt-3 mx-2">
        <div className="nav-logo-container">
          {/* <span className="nav-logo">Road Radar</span> */}
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar-links-container">
          <a href="/#home">Home</a>
          <a href="/#cityList">Cities</a>
          <a href="/#about">About</a>
          <a href="/#testimonial">Testimonial</a>
          <a href="/#contact">Contact</a>
          <a href="/viewbus">Bus List</a>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {/* <Link to="/login" className="primary-button2">
          Login
        </Link> */}
          {auth ? (
            <div className="button-sign">
              <button onClick={logout} className="primary-button mx-2">
                Logout
              </button>
              <Link to={mode ? "/admin" : "/profile/123"}>
                <MdAccountCircle
                  title={mode ? "Admin Panel" : "Profile"}
                  color="#222"
                  size={35}
                />
              </Link>
            </div>
          ) : (
            <div className="button-sign">
              <button onClick={login} className="primary-button2">
                Login
              </button>
              <button onClick={register} className="primary-button">
                Register
              </button>
            </div>
          )}
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            {auth ? (
              <div className="d-flex justify-content-center align-items-center mt-3">
                <button onClick={logout} className="primary-button mx-2">
                  Logout
                </button>
                <Link to={mode ? "/admin" : "/profile/123"}>
                  <MdAccountCircle size={30} />
                </Link>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center mt-3">
                <button onClick={login} className="primary-button2">
                  Login
                </button>
                <button onClick={register} className="primary-button">
                  Register
                </button>
              </div>
            )}
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <a href={item.link}>
                      <ListItemText primary={item.text} />
                    </a>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
