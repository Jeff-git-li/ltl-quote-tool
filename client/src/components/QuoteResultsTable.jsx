import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, useTheme, useMediaQuery } from '@mui/material';

const QuoteResultsTable = ({ rates }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
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
    { field: 'provider', headerName: 'Provider', flex: 2, minWidth: 120 },
    { field: 'services', headerName: 'Services', flex: 1, minWidth: 100 },
    { field: 'price', headerName: 'Price', flex: 1, minWidth: 90},
    { field: 'estimatedPickupDate', headerName: 'Estimated Pickup Date', flex: 2, minWidth: 140 },
    { field: 'estimatedDeliveryDate', headerName: 'Estimated Delivery Date', flex: 2, minWidth: 140 },
    { field: 'transitDays', headerName: 'Transit Days', flex: 1, minWidth: 100 },
    { field: 'truck', headerName: 'Truck Type', flex: 1, minWidth: 100 }
  ];

  return (
    <Container
      disableGutters={isMobile}
      sx={{
        marginTop: 4,
        px: isMobile ? 0 : 2,
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <h2 style={{
        fontSize: isMobile ? '1.1rem' : '1.5rem',
        textAlign: isMobile ? 'center' : 'left',
        marginLeft: isMobile ? 8 : 0
      }}>
        Quote Results
      </h2>
      <div
        style={{
          width: '100%',
          minWidth: isMobile ? 600 : 'auto',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: 8,
          border: '1px solid #eee',
          marginBottom: 16,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          autoHeight
          sx={{
            fontSize: isMobile ? '0.85rem' : '1rem',
            '& .MuiDataGrid-cell': {
              py: isMobile ? 0.5 : 1,
              px: isMobile ? 0.5 : 2,
            },
            '& .MuiDataGrid-columnHeaders': {
              fontSize: isMobile ? '0.9rem' : '1rem',
            },
            '& .MuiDataGrid-virtualScroller': {
              overflowX: 'auto !important',
            },
          }}
        />
      </div>
      {isMobile && (
        <div style={{
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#888',
          marginTop: -8,
          marginBottom: 8,
        }}>
          Swipe to see more columns &rarr;
        </div>
      )}
    </Container>
  );
};

export default QuoteResultsTable;
