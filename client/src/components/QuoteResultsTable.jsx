import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';

const QuoteResultsTable = ({ rates }) => {
  const rows = rates.map((r, index) => ({
    id: r.id || index,
    provider: r.provider,
    services: r.services?.join(', ') || 'Standard',
    price: `$${r.price.toFixed(2)}`,
    estimatedPickupDate: new Date(r.estimatedPickupDate).toLocaleDateString(),
    estimatedDeliveryDate: new Date(r.estimatedDeliveryDate).toLocaleDateString(),
    transitDays: `${r.transitDays.minimum} - ${r.transitDays.maximum}`,
    truck: r.truck?.equipment || 'N/A',
  }));

  const columns = [
    { field: 'provider', headerName: 'Provider', flex: 2 },
    { field: 'services', headerName: 'Services', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'estimatedPickupDate', headerName: 'Estimated Pickup Date', flex: 2 },
    { field: 'estimatedDeliveryDate', headerName: 'Estimated Delivery Date', flex: 2 },
    { field: 'transitDays', headerName: 'Transit Days', flex: 1 },
    { field: 'truck', headerName: 'Truck Type', flex: 1 }
  ];

  return (
    <Container style={{ marginTop: '2rem' }}>
      <h2>Quote Results</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        autoHeight
      />
    </Container>
  );
};

export default QuoteResultsTable;
