import {
  Box,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  Button,
  AppBar,
  Toolbar,
} from '@mui/material';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import LiquidityTokenLoker from './pages/LiquidityTokenLoker';
import MenuIcon from '@mui/icons-material/Menu';
import theme from './theme';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

function App() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle sidebar for mobile view
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Web3 Connector
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 11155111, 59141], // Ethereum and testnets, binance smart chain
  });

  const { activate, deactivate, account, active } = useWeb3React();

  // Connect to MetaMask
  const connectWallet = async () => {
    try {
      await activate(injected, (error) => {
        console.error('Connection Error:', error);
      });
      console.log('Connected to MetaMask', injected);
    } catch (error) {
      console.error('Connection Error:', error);
    }
  };

  // Disconnect Wallet
  const disconnectWallet = () => {
    deactivate();
  };

  return (
    <>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', height: '100vh' }}>
          {/* AppBar */}
          <AppBar
            position='fixed'
            sx={{ zIndex: 1201, backgroundColor: theme.palette.primary.main }}
          >
            <Toolbar>
              {isSmallScreen && (
                <IconButton
                  edge='start'
                  color='inherit'
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant='h6' sx={{ flexGrow: 1 }}>
                Token Manager
              </Typography>

              {/* Wallet Connect */}
              {!active ? (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={connectWallet}
                  sx={{
                    textTransform: 'none',
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                  }}
                >
                  Connect Wallet
                </Button>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: { xs: '0.75rem', sm: '1rem' },
                    }}
                  >{`${account.substring(0, 6)}...${account.substring(
                    account.length - 4
                  )}`}</Typography>
                  <Button
                    variant='outlined'
                    color='inherit'
                    onClick={disconnectWallet}
                    sx={{
                      textTransform: 'none',
                      fontSize: { xs: '0.75rem', sm: '1rem' },
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              )}
            </Toolbar>
          </AppBar>

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
                mt: { sm: 14, xs: 8, md: 10, lg: 10 },
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
                <ListItemText
                  primary='Lock Page'
                  sx={{
                    typography: { xs: 'body2', sm: 'body1' },
                  }}
                />
              </ListItem>
            </List>
          </Drawer>
          {/* Main Content */}
          <Box
            component='main'
            sx={{
              flexGrow: 1,
              p: { xs: 2, sm: 2 },
              mt: { xs: 2, sm: 2 },
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <Routes>
              <Route path='/lock' element={<LiquidityTokenLoker />} />
              <Route
                path='/home'
                element={
                  <Typography
                    variant='h4'
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      mt: 8,
                      fontSize: { xs: '1.25rem', sm: '2rem' },
                    }}
                  >
                    Welcome to Token Manager!
                  </Typography>
                }
              />
              <Route path='*' element={<LiquidityTokenLoker />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </>
  );
}

export default App;
