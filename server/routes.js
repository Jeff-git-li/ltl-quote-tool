const dotenv = require('dotenv');
dotenv.config();
const mothership = require('@api/mothership');

mothership.auth(process.env.MOTHERSHIP_API_KEY);
// mothership.server('https://api.mothership.com/beta');

/* -------------------------------------------------- */
/* ------------------- Route Handlers --------------- */
/* -------------------------------------------------- */

// Route 1: POST quote form and return the result json

const get_quotes = async function (req, res) {
  
  const { pickupZip ,
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

  console.log("Received body:", req.body);

  try {
    const response = await mothership.createQuote({
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
    });
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Quote request failed" });
  }
}

module.exports = {
  get_quotes
};