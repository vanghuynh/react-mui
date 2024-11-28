import {
  Box,
  Tabs,
  Tab,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import LiquidityLocker from './components/LiquidityLocker';
import TokenLocker from './components/TokenLocker';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import LiquidityTokenLoker from './pages/LiquidityTokenLoker';
import MenuIcon from '@mui/icons-material/Menu';
import theme from './theme';

function App() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle sidebar for mobile view
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', height: '100vh' }}>
          {/* AppBar for small screens */}
          {isSmallScreen && (
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: 56,
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.background.default,
                zIndex: 1201, // Ensure it's above the Drawer
                display: 'flex',
                alignItems: 'center',
                px: 2,
              }}
            >
              <IconButton
                edge='start'
                color='inherit'
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                Token Manager
              </Typography>
            </Box>
          )}

          {/* Sidebar Drawer */}
          <Drawer
            variant={isSmallScreen ? 'temporary' : 'permanent'}
            open={!isSmallScreen || mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              width: 240,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
                backgroundColor: (theme) => theme.palette.background.default,
              },
            }}
            ModalProps={{
              keepMounted: true, // Improves performance on mobile
            }}
          >
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                mt: { sm: 6, md: 2 },
                mb: 2,
                color: (theme) => theme.palette.primary.main,
              }}
            >
              Token Manager
            </Typography>
            <List>
              {/* Lock Page Navigation */}
              <ListItem button component={Link} to='/lock'>
                <ListItemIcon>
                  <LockIcon
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  />
                </ListItemIcon>
                <ListItemText primary='Lock Page' />
              </ListItem>
            </List>
          </Drawer>
          {/* Main Content */}
          <Box
            component='main'
            sx={{
              flexGrow: 1,
              p: { sm: 0, md: 3 },
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <Routes>
              <Route path='/lock' element={<LiquidityTokenLoker />} />
              <Route
                path='*'
                element={
                  <Typography
                    variant='h4'
                    sx={{ color: (theme) => theme.palette.text.primary }}
                  >
                    Welcome to Token Manager!
                  </Typography>
                }
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </>
  );
}

export default App;
