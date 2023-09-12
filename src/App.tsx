import { Box, Grid, Typography } from "@mui/material";
import CryptoContainer from "./containers/CryptoContainer";
import HistoryContainer from "./containers/HistoryContainer";

function App() {
  return (
    <Box sx={{ width: "100vw", padding: "2rem" }}>
      <Typography variant="h3">Crypto Dashboard</Typography>
      <Grid container spacing={4}>
        <CryptoContainer />
        <HistoryContainer />
      </Grid>
    </Box>
  );
}

export default App;
