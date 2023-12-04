import { CharactersTable } from "./Characters/CharactersTable";
import { Container, CssBaseline, Typography } from "@mui/material";

function App() {
  return (
    <CssBaseline>
      <Container
        component="main"
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h2">
          Star Wars Characters
        </Typography>
        <CharactersTable />
      </Container>
    </CssBaseline>
  );
}

export default App;
