// import React from 'react'
import styles from "./Nav.module.css";
import Logo from "../../assets/logoally.png";
import $ from "jquery";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = [
    {
      title: "Sobre",
      action: () => handleNavigate("quemsou"),
    },
    {
      title: "Projetos",
      action: () => {
        scrollTo({
          top: $("#projetos")[0].offsetTop - 66,
          behavior: "smooth",
        });
      },
    },
    {
      title: "Contato",
      action: () => handleNavigate("contato"),
    },
  ];

  const handleNavigate = (id) => {
    $(`#${id}`)[0].scrollIntoView({ block: "start", inline: "nearest" });
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img className={styles.logo} src={Logo} />
      <Divider style={{ backgroundColor: "orangeRed" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={item.action}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img style={{ height: 40 }} src={Logo} />
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  sx={{ color: "#fff" }}
                  onClick={item.action}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Nav;
