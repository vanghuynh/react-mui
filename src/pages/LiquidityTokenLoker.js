import { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import LiquidityLocker from '../components/LiquidityLocker';
import TokenLocker from '../components/TokenLocker';
const LiquidityTokenLoker = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Box sx={{ p: 4 }}>
      {/* Page Title */}
      <Typography variant='h4' sx={{ mb: 4 }}>
        Token & Liquidity Locker
      </Typography>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor='primary'
        textColor='primary'
        centered
        sx={{ mb: 4 }}
      >
        <Tab label='Liquidity Locker' />
        <Tab label='Token Locker' />
      </Tabs>

      {/* Tab Content */}
      {activeTab === 0 && <LiquidityLocker />}
      {activeTab === 1 && <TokenLocker />}
    </Box>
  );
};

export default LiquidityTokenLoker;
