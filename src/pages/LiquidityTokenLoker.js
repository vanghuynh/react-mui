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
    <Box sx={{ px: { sm: 1, md: 4 }, py: { sm: 4, md: 4 } }}>
      {/* Page Title */}
      <Typography variant='h4' sx={{ mb: 4, mt: 8 }}>
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
        <Tab label='Token Locker' />
        <Tab label='Liquidity Locker' />
      </Tabs>

      {/* Tab Content */}
      {activeTab === 0 && <TokenLocker />}
      {activeTab === 1 && <LiquidityLocker />}
    </Box>
  );
};

export default LiquidityTokenLoker;
