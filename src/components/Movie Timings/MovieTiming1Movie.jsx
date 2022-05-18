import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const MovieTiming1Move = () => {
  const theme = useTheme();

  return (<>
    <Card sx={{ display: 'flex', marginTop: '60px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Digikull Wave cinemas
          </Typography>
          <br />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Timing:- 10-15 AM
          </Typography>
        </CardContent>
      </Box>
      <Button variant="contained" sx={{ marginLeft: "300px", height: "60px", marginTop: "30px" }}>
        Book
      </Button>
    </Card>

    {/* Other Card */}

    <Card sx={{ display: 'flex', marginTop: '30px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Digikull INOX cinemas
          </Typography>
          <br />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Timing:- 1-15 AM
          </Typography>
        </CardContent>
      </Box>
      <Button variant="contained" sx={{ marginLeft: "300px", height: "60px", marginTop: "30px" }}>
        Book
      </Button>
    </Card>
  </>
  );
}
export default MovieTiming1Move;