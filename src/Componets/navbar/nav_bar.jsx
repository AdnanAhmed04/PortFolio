import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const pages = [
  { name: "About me", nav_id: "landing" },
  { name: "Projects", nav_id: "Projects" },
  { name: "My Skills", nav_id: "skill" },
  { name: "Let's Connect", nav_id: "contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // 🌙 Dark mode state
  const [darkMode, setDarkMode] = React.useState(true);

  // Load preference from localStorage on mount
  React.useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("darkmode"));
    if (savedMode !== null) {
      setDarkMode(savedMode);
      document.body.style.backgroundColor = savedMode ? "#0a0e2a" : "#ffffff";
    } else {
      localStorage.setItem("darkmode", JSON.stringify(true));
      document.body.style.backgroundColor = "#0a0e2a";
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkmode", JSON.stringify(newDarkMode));
    document.body.style.backgroundColor = newDarkMode ? "#0a0e2a" : "#ffffff";
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page) {
      const targetId = page.replace(/\s+/g, "").toLowerCase();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: darkMode ? "#0a0e2a" : "#ffffff",
        opacity: 0.95,
        color: darkMode ? "#fff" : "#000",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".0rem",
              color: darkMode ? "#fff" : "#000",
              textDecoration: "none",
            }}
          >
            <span className="absolute text-[1.2rem] left_side">
              &lt; <strong>Front-end Developer</strong> /&gt;
            </span>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
              },
            }}
          >
            <div className="header">
              <nav className="navbar">
                <ul
                  className="navbar__menu"
                  style={{ color: darkMode ? "#fff" : "#000" }}
                >
                  {pages.map((page, index) => (
                    <li key={index} className="navbar__item">
                      <ScrollLink
                        activeClass="active"
                        to={page.nav_id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <div className="linktag navbar__link">
                          {page.name}
                        </div>
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Box>

          {/* 🌙 Dark Mode Toggle */}
          {/* <div className="toggle">
            <input
              type="checkbox"
              id="btn"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="btn">
              <span className="thumb"></span>
            </label>
            <div className="light"></div>
          </div> */}

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-icon"
            >
              <MenuIcon style={{ color: darkMode ? "#fff" : "#ffffff" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              className={`${isMenuOpen ? "transparent-menu" : "opacity-0"} `}
            >
              <IconButton
                onClick={() => handleCloseNavMenu()}
                className="absolute top-3 right-3"
              >
                <CloseIcon style={{ color: darkMode ? "#fff" : "#000" }} />
              </IconButton>
              <div className="bg-transparent border mt-3 w-[80vw]">
                {pages.map((page, index) => (
                  <MenuItem
                    key={index}
                    className={`${isMenuOpen ? "my_element" : ""}`}
                  >
                    <ScrollLink
                      activeClass="active"
                      to={page.nav_id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleCloseNavMenu(page.name)}
                      className="w-[100%] flex items-center justify-center gap-2"
                      style={{ color: darkMode ? "#fff" : "#ffffff" }}
                    >
                      {page.name}
                    </ScrollLink>
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
