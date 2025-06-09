const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const apiKey = process.env.MOTHERSHIP_API_KEY;

// mothership.server('https://api.mothership.com/beta');

/* -------------------------------------------------- */
/* ------------------- Route Handlers --------------- */
/* -------------------------------------------------- */

// Route 1: POST quote form and return the result

const get_quotes = async function (req, res) {

  const { pickupZip,
    deliveryZip,
    pickupOpenTime,
    pickupCloseTime,
    deliveryOpenTime,
    deliveryCloseTime,
    pickupReadyDate,
    pickupReadyTime,
    type,
    quantity,
    weight,
    length,
    width,
    height
  } = req.body;

  // console.log("Received body:", req.body);

  try {
    const response = await axios.post(
      'https://sandbox.api.mothership.com/beta/quotes',
      {
        pickup: {
          address: { zip: pickupZip },
          openTime: pickupOpenTime,
          closeTime: pickupCloseTime
        },
        delivery: {
          address: { zip: deliveryZip },
          openTime: deliveryOpenTime,
          closeTime: deliveryCloseTime
        },
        freight: [{
          type: type,
          quantity: quantity,
          weight: parseInt(weight),
          length: parseInt(length),
          width: parseInt(width),
          height: parseInt(height)
        }],
        pickupReadyDate: {
          date: pickupReadyDate,
          time: pickupReadyTime
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/json',
        }
      }

    );
    // console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Quote request failed" });
  }
}

module.exports = {
  get_quotes
};