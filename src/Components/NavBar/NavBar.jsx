import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import LiveSearch from "../LiveSearch/LiveSearch";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import SortIcon from "@mui/icons-material/Sort";
import { Link, NavLink, useLocation } from "react-router-dom";
import { basketContext } from "../../context/BasketContextProvider";
import { authContext } from "../../context/AuthContextProvider";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  const { basketCount } = React.useContext(basketContext);

  const { user, handleLogout } = React.useContext(authContext);
  console.log(user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      style={{ width: "300px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <Link to="/auth" style={{ color: "black" }}>
        <MenuItem>LogIn</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>LogOut</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <Link to="/basket" style={{ color: "black" }}>
        <MenuItem onClick={handleMenuClose}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge badgeContent={basketCount} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <p>my cart</p>
        </MenuItem>
      </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl2);
  const handleClickFilter = event => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl2(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#b7c9d9" }}>
        <Toolbar>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickFilter}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <SortIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            sx={{ color: "black" }}
            anchorEl={anchorEl2}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}>
            <Link to="/">
              <MenuItem onClick={handleClose} style={{ color: "black" }}>
                Home
              </MenuItem>
            </Link>
            {user.email === "zuhra@mail.ru" ? (
              <Link to="/add">
                <MenuItem onClick={handleClose} style={{ color: "black" }}>
                  Add Products
                </MenuItem>
              </Link>
            ) : null}
            {location.pathname === "/list" ? (
              <MenuItem onClick={handleClose} style={{ color: "black" }}>
                <span style={{ cursor: "pointer" }}>Products List</span>
              </MenuItem>
            ) : (
              <Link to="/list">
                <MenuItem onClick={handleClose} style={{ color: "black" }}>
                  Products List
                </MenuItem>
              </Link>
            )}
            <MenuItem onClick={handleClose} style={{ color: "black" }}>
              <Typography>
                {user.email ? user.email : <span>Users</span>}
              </Typography>
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            Z&A
          </Typography>
          {location.pathname == "/list" ? <LiveSearch /> : null}
          <Box
            id="NavBar"
            sx={{
              display: "flex",
              width: "50%",
              justifyContent: "space-around",
            }}>
            <NavLink to="/">Home</NavLink>
            {user.email === "zuhra@mail.ru" ? (
              <NavLink to="/add">Add Products</NavLink>
            ) : null}

            {location.pathname === "/list" ? (
              <span style={{ cursor: "pointer" }} className="active">
                Products List
              </span>
            ) : (
              <NavLink to="/list">Products List</NavLink>
            )}
            {/* <Link to="/list">Products List</Link> */}
            <Typography>
              {user.email ? user.email : <span>Users</span>}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/basket">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit">
                <Badge badgeContent={basketCount} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default NavBar;
