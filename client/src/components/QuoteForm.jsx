import React from 'react';
import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';

export default function QuoteForm({ form, setForm, handleSubmit }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        LTL Quote Request
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Pickup Zip" name="pickupZip" fullWidth required value={form.pickupZip} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Delivery Zip" name="deliveryZip" fullWidth required value={form.deliveryZip} onChange={handleChange} />
          </Grid>

          {/*

          <Grid item xs={6}>
            <TextField label="Pickup Open Time" name="pickupOpenTime" fullWidth value={form.pickupOpenTime} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Pickup Close Time" name="pickupCloseTime" fullWidth value={form.pickupCloseTime} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Delivery Open Time" name="deliveryOpenTime" fullWidth value={form.deliveryOpenTime} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Delivery Close Time" name="deliveryCloseTime" fullWidth value={form.deliveryCloseTime} onChange={handleChange} />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Pickup Ready Date"
              type="date"
              name="pickupReadyDate"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={form.pickupReadyDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Pickup Ready Time" name="pickupReadyTime" fullWidth value={form.pickupReadyTime} onChange={handleChange} />
          </Grid>


          */}

          <Grid item xs={6}>
            <TextField
              select
              label="Freight Type"
              name="type"
              fullWidth
              required
              value={form.type}
              onChange={handleChange}
            >
              <MenuItem value="Pallet">Pallet</MenuItem>
              <MenuItem value="Bag">Bag</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Quantity" name="quantity" type="number" required fullWidth value={form.quantity} onChange={handleChange} />
          </Grid>

          <Grid item xs={3}>
            <TextField label="Weight (lbs)" name="weight" type="number" required fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Length (in)" name="length" type="number" required fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Width (in)" name="width" type="number" required fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Height (in)" name="height" type="number" required fullWidth onChange={handleChange} />
          </Grid>

          <Grid item xs={12} textAlign="center" sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Get Quote
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
