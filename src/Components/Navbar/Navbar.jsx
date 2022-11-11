import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Button, FormControl, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Form, Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import LiveSearch from "../LiveSearch/LiveSearch";
import { AccountCircle } from "@mui/icons-material";
import { authContext } from "../../context/AuthContexProvider";
import { alpha } from "@mui/material";
import "./Navbar.css";
import { basketContext } from "../../context/BasketProductProvider";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const { basketCount } = React.useContext(basketContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, handleLogOut } = React.useContext(authContext);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const menuId = "primary-search-account-menu";

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            LOGO
          </Typography>
          <Box
            sx={{
              width: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              color: "black",
            }}>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "15px",
                fontWeight: "bold",
              }}>
              <Link className="linkFabel" to="/">
                FABLE
              </Link>
            </p>
            <div className="burger">
              <NavLink to="/add">ADD PRODUCT</NavLink>
              <NavLink to="list">COLLECTIONS</NavLink>
              <NavLink to="/comment">REVIEWS</NavLink>
            </div>
          </Box>
          <Search className="searchNavbar" sx={{ mr: "35px" }}>
            <LiveSearch />
          </Search>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Link to="/basket">
              <Badge badgeContent={basketCount} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </Link>
          </IconButton>

          <Box
            className="boxAvatar"
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              paddingRight: "20px",
            }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              style={{ marginTop: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <Link to="/auth">Registration</Link>
              <Button onClick={handleLogOut} sx={{ color: "black" }}>
                LogOut
              </Button>
            </Menu>
            <Box
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}>
              <Link
                to="/"
                style={{
                  paddingRight: "20px",
                  paddingLeft: "20px",
                }}>
                {user.email ? user.email : user.email}
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
