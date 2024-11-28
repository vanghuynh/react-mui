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
} from '@mui/material';
import LiquidityLocker from './components/LiquidityLocker';
import TokenLocker from './components/TokenLocker';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import LiquidityTokenLoker from './pages/LiquidityTokenLoker';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', height: '100vh' }}>
          {/* Sidebar Drawer */}
          <Drawer
            variant='permanent'
            sx={{
              width: 240,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
                backgroundColor: (theme) => theme.palette.background.default,
              },
            }}
          >
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
                mt: 2,
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
              p: 3,
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
