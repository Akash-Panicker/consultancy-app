import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CustomerReview({ name, content }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
}

const defaultTheme = createTheme();

const customerReviews = [
  {
    name: 'John Doe',
    content:
      'Amazing product! It exceeded my expectations in every way. I highly recommend it to anyone.',
  },
  {
    name: 'Jane Smith',
    content:
      'I m so glad I found this. It has made my life so much easier and more enjoyable.',
  },
  {
    name: 'Mike Johnson',
    content:
      'This product is a game-changer. It has improved my daily routine and saved me a lot of time.',
  },
];

export default function CustomerReviews() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Customer Reviews
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Read what our customers are saying about our product.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {customerReviews.map((review, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <CustomerReview name={review.name} content={review.content} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
  );
}
