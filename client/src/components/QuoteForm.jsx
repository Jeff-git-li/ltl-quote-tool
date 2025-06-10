import {
  Grid,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';

export default function QuoteForm({ form, setForm, handleSubmit }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Type of this cargo. Can be: Bag, Bale, Box, Bucket, 
  // Bundle, Can, Carton, Case, Coil, Crate, Cylinder, Drum, 
  // Pail, Pallet, Pieces, Reel, Roll, Skid, Tote, or Tube
  const cargoType = [
    {value: 'Bag'},
    {value: 'Bale'},
    {value: 'Box'},
    {value: 'Bucket'},
    {value: 'Bundle'},
    {value: 'Can'},
    {value: 'Carton'},
    {value: 'Case'},
    {value: 'Coil'},
    {value: 'Crate'},
    {value: 'Cylinder'},
    {value: 'Drum'},
    {value: 'Pail'},
    {value: 'Pallet'},
    {value: 'Pieces'},
    {value: 'Reel'},
    {value: 'Roll'},
    {value: 'Skid'},
    {value: 'Tote'},
    {value: 'Tube'},
  ]

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={{xs: 2, sm: 3}} sx={{
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Grid item xs={12}><h2>LTL Quote Request</h2></Grid>

          <Grid item xs={12} sm={6} md={3}> 
            <TextField 
              label="Pickup Zip" 
              name="pickupZip" 
              required
              fullWidth 
              value={form.pickupZip} 
              onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}> 
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
          <Grid item xs={12} sm={6} md={3}> 
            <TextField 
              label="Pickup Ready Time" 
              type='time'
              name="pickupReadyTime" 
              inputProps={{
                step: 3600  // 3600 seconds = 1 hour
              }}
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={form.pickupReadyTime} 
              onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}> 
            <TextField 
              label="Delivery Zip" 
              name="deliveryZip" 
              required 
              fullWidth
              value={form.deliveryZip} 
              onChange={handleChange} />
          </Grid>

          {/*

          <Grid item xs={3}>
            <TextField label="Pickup Open Time" type="time" name="pickupOpenTime" value={form.pickupOpenTime} onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Pickup Close Time" type="time" name="pickupCloseTime" value={form.pickupCloseTime} onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Delivery Open Time" type="time" name="deliveryOpenTime" value={form.deliveryOpenTime} onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Delivery Close Time" type="time" name="deliveryCloseTime" fullWidth value={form.deliveryCloseTime} onChange={handleChange} />
          </Grid>

          */}


          <Grid item xs={12} sm={4} md={2}>
            <TextField
              select
              label="Freight Type"
              name="type"
              required
              fullWidth
              value={form.type}
              onChange={handleChange}
            >
                {cargoType.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <TextField label="Quantity" name="quantity" type="number" required fullWidth value={form.quantity} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <TextField label="Weight (lbs)" name="weight" type="number" required fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <TextField label="Length (in)" name="length" type="number" required fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <TextField label="Width (in)" name="width" type="number" required fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <TextField label="Height (in)" name="height" type="number" required fullWidth onChange={handleChange} />
          </Grid>

          <Grid item xs={12} textAlign="center" sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Get Quote
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
