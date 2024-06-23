import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


const App = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant='h5' align='center' color="textSecondary" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quis?</Typography>
          </Container>
        </div>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </main>
    </div>
  )
}

export default App