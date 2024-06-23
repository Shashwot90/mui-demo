// src/style.js
import { styled } from '@mui/material/styles';
import { PhotoCamera} from '@mui/icons-material';
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

export const StatWrapper = styled('div')(
  ({ theme }) => `
    background-color: ${theme.palette.background.paper};
    padding: ${theme.spacing(8, 0, 6)};
  `,
);

export const StyledPhotoCamera = styled(PhotoCamera)(
    ({ theme }) => `
      margin-right: '20px';
      color: ${theme.palette.primary.main};
    `,
  );

  export const DivBtn = styled('div')(
    ({ theme }) => `
      margin-right: '20px';
      
    `,
  );

  export const ConCardGrid = styled(Container)(
    ({ theme }) => `
      padding: 20px;
      
    `,
  );

  export const Cardcard = styled(Card)(
    ({ theme }) => `
      height: 100%;
      display: flex;
      flex-direction: column;
      
    `,
  );

  export const Cardmediacard = styled(CardMedia)(
    ({ theme }) => `
      padding-top: 56.25%;
      
    `,
  );
  export const Cardcontentcard = styled(CardContent)(
    ({ theme }) => `
      flex-grow: 1;
      
    `,
  );
  export const Footer = styled('footer')(
    ({ theme }) => `
      background-color: ${theme.palette.background.paper};
      padding: 50px 0;
      
    `,
  );