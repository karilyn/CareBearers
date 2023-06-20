import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { parentNavBarItems, caregiverNavBarItems } from "./navbarItems";
import { navbarStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../AppState.jsx";

//Side navbar in dashboard for logged in users
const Navbar = () => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const { dispatch } = useAppState();

  //Get logged in user details - workaround until useAppState is fixed
  const isCaregiver = JSON.parse(
    window.localStorage.getItem("auth")
  ).isCaregiver;

  return (
    <Drawer
      sx={navbarStyles.drawer}
      variant="permanent"
      anchor="left"
      style={{ width: "20%" }}
    >
      <List>
        <ListItem
          button
          key="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <ListItemButton>
            <ListItemText
              sx={{
                fontFamily: "Lobster",
                fontSize: "40px",
                marginLeft: "20px",
              }}
              disableTypography
              primary="Care Bearers"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        {(isCaregiver ? caregiverNavBarItems : parentNavBarItems).map(
          (item, index) => (
            <ListItem
              button
              key={item.id}
              onClick={() => {
                if (item.route === "/logout") {
                  dispatch({ type: "logout" });
                  navigate("/");
                } else {
                  navigate(item.route);
                }
              }}
            >
              <ListItemButton
                sx={{
                  "&.Mui-selected": {
                    color: "#ffff",
                    backgroundColor: "#22585c",
                  },
                }}
                selected={selectedIndex === item.id}
                onClick={(event) => handleListItemClick(event, item.id)}
              >
                <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
                <ListItemText sx={navbarStyles.text} primary={item.label} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};

export default Navbar;
