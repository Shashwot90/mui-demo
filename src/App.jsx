import React from 'react';
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StatWrapper,Footer, DivBtn, StyledPhotoCamera, ConCardGrid,Cardcontentcard,  Cardcard, Cardmediacard } from './style';
 
const App = () => {
  const cards = [1, 2, 3,4,5,6,7,8,9]
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <StyledPhotoCamera />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <StatWrapper>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quis?
            </Typography>
            <DivBtn>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </DivBtn>
          </Container>

        </StatWrapper>
        <ConCardGrid maxWidth="md" >
          <Grid container spacing={4}>
          {cards.map((card) => (

            <Grid item key={card} xs={12} sm={6} md={4}>
              <Cardcard>
                <Cardmediacard  
                  image='https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  title='Image Title'
                />
                <Cardcontentcard>
                  <Typography gutterBottom variant='h5'>Heading</Typography>
                  <Typography>This is a media card.</Typography>
                </Cardcontentcard>
                <CardActions>
                  <Button size='small' color='primary'>View</Button>
                  <Button size='small' color='primary'>Edit</Button>
                </CardActions>
              </Cardcard>
            </Grid>
          ))}
          </Grid>
        </ConCardGrid>

      </main>
      <Footer>
        <Typography variant='h6' gutterBottom align='center'>Footer</Typography>
        <Typography variant='subtitle1' gutterBottom align='center' color='textSecondary'>Somethign here</Typography>
      </Footer>

    </ThemeProvider>
  );
};

export default App;
