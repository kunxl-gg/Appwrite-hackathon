import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to dark
  },
});
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";

const drawerWidth = 240;

const Dashboard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="Drawer-drawer">
      <Toolbar className="Toolbar-logo">LOGO</Toolbar>
      <Divider sx={{ backgroundColor: "#27293A" }} />
      <List>
        {["Dashboard", "Logout"].map((text, index) => (
          <ListItem className="ListItem" key={text} disablePadding>
            <ListItemButton className="ListItemButton">
              <Link to="/dashboard">
                <ListItemIcon
                  style={{ color: "gray" }}
                  sx={{ minWidth: "0px" }}
                >
                  {index % 2 === 0 ? (
                    <DashboardTwoToneIcon sx={{ fontSize: "20px" }} />
                  ) : (
                    <LogoutIcon sx={{ fontSize: "20px" }} />
                  )}
                </ListItemIcon>
              </Link>
              <p className="ListItemText-sidebar">{text}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#27293A" }} />
      <List>
        {["Join our community"].map((text) => (
          <ListItem className="ListItem" key={text} disablePadding>
            <ListItemButton className="ListItemButton">
              <ListItemIcon style={{ color: "gray" }} sx={{ minWidth: "0px" }}>
                <InstagramIcon sx={{ fontSize: "20px" }} />
              </ListItemIcon>
              <p className="ListItemText-sidebar">{text}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const Items = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
      title: "Polo Shirt",
      subtitle: "$20.00",
      caption: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Shirt",
      subtitle: "$40.00",
      caption: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
      title: "Pant",
      subtitle: "$15.00",
      caption: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Shoes",
      subtitle: "$50.00",
      caption: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            className="AppBar-top"
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar className="Toolbar-top">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography className="Typography-logo">
                <p>Dashboard</p>
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            className="Box-drawer"
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              className="Drawer-drawer"
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              className="Drawer-drawer"
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            className="Box-main"
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Typography
              className="Typography-content"
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#4C4EF0",
                marginTop: "10vh",
                marginBottom: "1rem",
                marginLeft: { sm: `${drawerWidth}px` },
              }}
            >
              <p>Your Fashion Collection</p>
            </Typography>
            <div className="card-container">
              {Items.map((item, key) => (
                <Card className="itemCard-card" key={key}>
                  <CardMedia
                    className="CardMedia-media"
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                  />
                  <Box className="Card-content">
                    <Info>
                      <InfoTitle>
                        <h3>{item.title}</h3>
                      </InfoTitle>
                      <InfoSubtitle>
                        <p>{item.subtitle}</p>
                      </InfoSubtitle>
                      <InfoCaption>
                        <span>{item.caption}</span>
                      </InfoCaption>
                    </Info>
                  </Box>
                </Card>
              ))}
            </div>
          </Box>
        </Box>
        </ThemeProvider>
  );
};

export default Dashboard;