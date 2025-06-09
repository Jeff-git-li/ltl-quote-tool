import { useState } from 'react';
import axios from 'axios';
import QuoteForm from '../components/QuoteForm';
import QuoteResultsTable from '../components/QuoteResultsTable';
import { Container } from '@mui/material';

export default function HomePage() {
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
      const res = await axios.post('http://localhost:5001/api/quote', payload);
      setQuote(res.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch quote');
    }
  };

  return (
    <Container maxWidth={false} sx={{ px: 4, py: 1 }}>

      <QuoteForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
      {quote?.data?.rates?.length > 0 && <QuoteResultsTable rates={quote.data.rates} />}
    </Container>
  );
}
