import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiSolidCategory } from "react-icons/bi";
import { IoListCircleSharp } from "react-icons/io5";

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
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },

    {
      text: "Cities",
      icon: <BiSolidCategory size={23} />,
      link: "/",
    },
    {
      text: "Bus List",
      icon: <IoListCircleSharp size={25} />,
      link: "/viewbus",
    },
    {
      text: "About",
      icon: <InfoIcon size={25} />,
      link: "/viewbus",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/viewbus",
    },
  ];

  const auth = localStorage.getItem("authToken");

  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const register = () => {
    navigate("/register");
  };
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="nav-wrapper w-100">
      <div className="nav-logo-container">
        {/* <span className="nav-logo">Road Radar</span> */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="/">Cities</a>
        <a href="/viewbus">Bus List</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
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
            <Link to={"/admin"}>
              <MdAccountCircle title="Admin Panel" size={35} />
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
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
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
              <Link to="/admin">
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
                  <Link to={item.link}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
