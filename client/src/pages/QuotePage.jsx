import { useState } from 'react';
import axios from 'axios';
import QuoteForm from '../components/QuoteForm';
import QuoteResultsTable from '../components/QuoteResultsTable';
import { Container, useMediaQuery, useTheme } from '@mui/material';

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const formatTime = (t) => t.replace(':', '').padStart(4, '0');

  const [form, setForm] = useState({
    pickupZip: "",
    deliveryZip: "",
    pickupOpenTime: "10:00",
    pickupCloseTime: "16:00",
    deliveryOpenTime: "10:00",
    deliveryCloseTime: "16:00",
    pickupReadyDate: tomorrow,
    pickupReadyTime: "10:00",
    type: "Pallet",
    quantity: 1,
    weight: 0,
    length: 0,
    width: 0,
    height: 0
  });

  const [quote, setQuote] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format time fields
    const payload = {
      ...form,
      pickupOpenTime: formatTime(form.pickupOpenTime),
      pickupCloseTime: formatTime(form.pickupCloseTime),
      deliveryOpenTime: formatTime(form.deliveryOpenTime),
      deliveryCloseTime: formatTime(form.deliveryCloseTime),
      pickupReadyTime: formatTime(form.pickupReadyTime),
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/quote`, payload);
      setQuote(res.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch quote');
    }
  };

  return (
    <Container
      maxWidth="md"
      disableGutters={isMobile}
      sx={{
        px: isMobile ? 0.5 : 4,
        py: 1,
        width: '100%',
      }}
    >
      <QuoteForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
      {quote?.data?.rates?.length > 0 && <QuoteResultsTable rates={quote.data.rates} />}
    </Container>
  );
}
