require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/get-ltl-rates', async (req, res) => {
  try {
    const response = await axios.post('https://api.mothership.com/v2/quotes', req.body, {
      headers: {
        Authorization: `Bearer ${process.env.MOTHERSHIP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching quote:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));
