import { useState } from 'react';
import axios from 'axios';
import QuoteForm from '../components/QuoteForm';
import QuoteResultsTable from '../components/QuoteResultsTable';
import { Container } from '@mui/material';

export default function HomePage() {
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [form, setForm] = useState({
    pickupZip: "",
    deliveryZip: "",
    pickupOpenTime: "1000",
    pickupCloseTime: "1600",
    deliveryOpenTime: "1000",
    deliveryCloseTime: "1600",
    pickupReadyDate: tomorrow,
    pickupReadyTime: "1000",
    type: "Pallet",
    quantity: 1,
    weight: 0,
    length: 0,
    width: 0,
    height: 0
  });

  const [quote, setQuote] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/quote', form);
      setQuote(res.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch quote');
    }
  };

  const required = (label) => (
    <><span style={{ color: 'red' }}>*</span> {label}</>
  );

  const columns = [
    { field: 'provider', headerName: 'Provider' },
    { field: 'price', headerName: 'Price' }
  ]

  return (
    <Container maxWidth={false} sx={{ px: 4, py: 6 }}>
      <QuoteForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
      {quote?.data?.rates?.length > 0 && <QuoteResultsTable rates={quote.data.rates} />}
    </Container>
  );
}
