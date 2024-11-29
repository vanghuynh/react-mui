import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
} from '@mui/material';
import { useState } from 'react';

const TokenLocker = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <Box sx={{ p: 4 }}>
      {/* Title Section */}
      <Typography variant='h4' sx={{ mb: 2 }}>
        Token Locker
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 4, color: 'text.secondary' }}>
        Token locks are allowing all ERC20 tokens, including rebasing and
        deflationary mechanisms to be supported.
      </Typography>

      {/* Main Card */}
      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            {/* Input Token Address */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Input Token Address'
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
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
                label='Amount'
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter the amount to lock'
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

            {/* Buttons */}
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
              <Typography color='error'>0</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle1'>PFee:</Typography>
              <Typography color='error'>0 coin</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle1'>Token:</Typography>
              <Typography color='error'>()</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TokenLocker;
