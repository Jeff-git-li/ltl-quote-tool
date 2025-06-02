import React, { useState } from "react";
import axios from "axios";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    pickupZip: "",
    destinationZip: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    freightClass: ""
  });

  const [quoteResults, setQuoteResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/api/get-ltl-rates", {
        pickup: { zip: formData.pickupZip },
        dropoff: { zip: formData.destinationZip },
        weight: parseFloat(formData.weight),
        dimensions: {
          length: parseFloat(formData.length),
          width: parseFloat(formData.width),
          height: parseFloat(formData.height)
        },
        class: parseInt(formData.freightClass)
      });
      setQuoteResults(response.data);
    } catch (error) {
      alert("Failed to fetch quote");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="pickupZip" value={formData.pickupZip} onChange={handleChange} placeholder="Pickup Zip" required />
      <input name="destinationZip" value={formData.destinationZip} onChange={handleChange} placeholder="Destination Zip" required />
      <input name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="Weight" required />
      <input name="length" type="number" value={formData.length} onChange={handleChange} placeholder="Length" required />
      <input name="width" type="number" value={formData.width} onChange={handleChange} placeholder="Width" required />
      <input name="height" type="number" value={formData.height} onChange={handleChange} placeholder="Height" required />
      <input name="freightClass" type="number" value={formData.freightClass} onChange={handleChange} placeholder="Freight Class" required />
      <button type="submit" disabled={loading}>{loading ? "Loading..." : "Get Quote"}</button>
      {quoteResults && <pre>{JSON.stringify(quoteResults, null, 2)}</pre>}
    </form>
  );
}
