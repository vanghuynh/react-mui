import { Button, Box, Grid } from '@mui/material';

import { Card, CardContent, Typography, TextField } from '@mui/material';

import { useState } from 'react';

const LiquidityLocker = () => {
  const [amount, setAmount] = useState('');

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant='h4' sx={{ mb: 2 }}>
        Liquidity Locker
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 4, color: 'text.secondary' }}>
        Use the locker to prove to investors you have locked liquidity. If you
        are not a token developer, this section is likely not for you.
      </Typography>

      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            {/* Input Token Address */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Token Address'
                placeholder='Enter token address'
                variant='outlined'
              />
            </Grid>

            {/* Token Information */}
            <Grid item xs={12} md={4}>
              <Typography variant='subtitle1'>Token Balance:</Typography>
              <Typography color='error'>0</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='subtitle1'>Possible Amount:</Typography>
              <Typography color='error'>0</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='subtitle1'>Locked Amount:</Typography>
              <Typography color='error'>0</Typography>
            </Grid>

            {/* Lock Amount */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Amount to Lock'
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant='outlined'
              />
            </Grid>

            {/* Input Time */}
            <Grid item xs={12}>
              <Typography variant='subtitle1'>Lock Date:</Typography>
              <Typography color='error'>
                {new Date().toLocaleString()}
              </Typography>
            </Grid>

            {/* Action Buttons */}
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button variant='contained' color='primary' sx={{ mr: 2 }}>
                Approve
              </Button>
              <Button variant='contained' color='secondary'>
                Lock
              </Button>
              <Button variant='outlined' color='error' sx={{ ml: 2 }}>
                Unlock
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Fee Section */}
      <Card elevation={3}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant='subtitle1'>Fee:</Typography>
              <Typography color='error'>0 Coin</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle1'>Unlock Time:</Typography>
              <Typography>0</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LiquidityLocker;
