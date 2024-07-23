import { useState } from "react";
import Logo from "../Assets/Logo1.jpg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CommentedRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      to: "home",
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
      to: "about",
    },
    {
      text: "Nosso Trabalho",
      icon: <HomeWorkIcon />,
      to: "work",
    },
    {
      text: "Avaliação",
      icon: <CommentedRoundedIcon />,
      to: "testimonials",
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
      to: "contact",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="logo-donuts" />
      </div>

      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <ScrollLink
            key={item.text}
            to={item.to}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            {item.text}
          </ScrollLink>
        ))}
        <a href="https://wa.me/5511974533388" target="_blank">
          <button className="primary-button">Faça seu pedido!</button>
        </a>
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
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
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
