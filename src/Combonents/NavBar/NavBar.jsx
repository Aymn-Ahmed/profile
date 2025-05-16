import React, { useState } from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavMenuMobile from './NavMenuMobile';

const NavBar = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(18, 18, 18, 0.8)',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLogo />
          <NavMenuMobile
            anchorElNav={anchorElNav}
            handleOpen={handleOpenNavMenu}
            handleClose={handleCloseNavMenu}
          />
          <NavLinks />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
