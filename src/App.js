import { Box } from '@mui/material';
import './App.css';
import AppRouter from './Routers/AppRouter';

function App() {
  return (
    <Box
      sx={{
        p: { xs: '10px' },
        backgroundColor: '#f9fafc',
      }}
    >
      <AppRouter />
    </Box>
  );
}

export default App;
